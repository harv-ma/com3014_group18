package com.indireed.jobservice;

import com.indireed.jobservice.config.MessagingConfig;
import com.indireed.jobservice.dtos.*;
import com.indireed.jobservice.exceptions.ResourceNotFoundException;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.*;

@Service
@AllArgsConstructor
public class JobServiceImpl implements JobService {
    private final JobRepository jobRepository;
    private final RestTemplate restTemplate;
    private final RabbitTemplate rabbitTemplate;

    @Override
    public JobDetailDto create(UUID userId, CreateUpdateJobDto request) {
        Job job = new ModelMapper().map(request, Job.class);
        job.setUserId(userId);
        job = jobRepository.save(job);
        return new ModelMapper().map(job, JobDetailDto.class);
    }

    @Override
    public JobDetailDto update(UUID id, UUID userId, CreateUpdateJobDto request) {
        Optional<Job> job = jobRepository.findById(id);
        if (job.isEmpty())
            throw new ResourceNotFoundException("Job not found");
        if(!job.get().getUserId().equals(userId)) {
            throw new AccessDeniedException("You are not allowed to edit this job");
        }
        new ModelMapper().map(request, job.get());
        Job updatedJob = jobRepository.save(job.get());
        return new ModelMapper().map(updatedJob, JobDetailDto.class);
    }

    @Override
    public JobDetailDto getSingle(UUID id) {
        Optional<Job> job = jobRepository.findById(id);
        if (job.isEmpty())
            throw new ResourceNotFoundException("Job not found");
        JobDetailDto currJob = new ModelMapper().map(job.get(), JobDetailDto.class);
        try {
            currJob.setUser(restTemplate.getForObject("http://USER-SERVICE/users/" + job.get().getUserId() + "/find", UserDetailDto.class));
        } catch (Exception ex) {
            ex.printStackTrace();
            currJob.setUser(null);
        }
        return currJob;
    }

    @Override
    public MessageResponseDto delete(UUID id, UUID userId) {
        Optional<Job> job = jobRepository.findById(id);
        if (job.isEmpty())
            throw new ResourceNotFoundException("Job not found");
        if(!job.get().getUserId().equals(userId))
            throw new AccessDeniedException("You are not allowed to delete this job");
        jobRepository.delete(job.get());
        rabbitTemplate.convertAndSend(MessagingConfig.JOB_DELETION_QUEUE, id);
        return new MessageResponseDto("Job deleted successfully");
    }

    @Override
    public List<JobDetailDto> getAll(String query) {
        List<JobDetailDto> jobList = new ArrayList<>();
        List<Job> jobs;

        if (query != null && !query.isEmpty()) {
            jobs = jobRepository.findAllByPositionContainingIgnoreCaseOrDescriptionContainingIgnoreCase(query, query);
        } else {
            jobs = jobRepository.findAll();
        }

        for (Job job : jobs) {
            JobDetailDto currJob = new ModelMapper().map(job, JobDetailDto.class);
            try {
                currJob.setUser(restTemplate.getForObject("http://USER-SERVICE/users/" + job.getUserId() + "/find", UserDetailDto.class));
            } catch (Exception ex) {
                ex.printStackTrace();
                currJob.setUser(null);
            }
            jobList.add(currJob);
        }
        return jobList;
    }

    @Override
    public List<OwnerJobDetailDto> getAllMine(UUID userId) {
        List<OwnerJobDetailDto> jobList = new ArrayList<>();
        List<Job> jobs = jobRepository.findAllByUserId(userId);
        for (Job job : jobs) {
            OwnerJobDetailDto currJob = new ModelMapper().map(job, OwnerJobDetailDto.class);

            try {
                ApplicationDetailDto[] applications = restTemplate.getForObject("http://APPLICATION-SERVICE/applications/job/"+job.getId(), ApplicationDetailDto[].class);
                assert applications != null;
                currJob.setApplications(Arrays.stream(applications).toList());
            } catch (Exception ex) {
                ex.printStackTrace();
                currJob.setApplications(new ArrayList<>());
            }
            jobList.add(currJob);
        }
        return jobList;
    }

    @Override
    public MessageResponseDto apply(UUID id, UUID userId) {
        Optional<Job> job = jobRepository.findById(id);
        if (job.isEmpty())
            throw new ResourceNotFoundException("Job not found");
        rabbitTemplate.convertAndSend(MessagingConfig.JOB_APPLICATION_QUEUE, new JobApplicationDTO(id, userId));
        return new MessageResponseDto("Application submitted successfully");
    }

    @RabbitListener(queues = "user_service_job_deletion_queue")
    private void deleteUserJobs(UUID userId) {
        List<Job> jobs = jobRepository.findAllByUserId(userId);
        jobRepository.deleteAll(jobs);
    }
}

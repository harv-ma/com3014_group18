package com.indireed.jobservice;

import com.indireed.jobservice.dtos.CreateUpdateJobDto;
import com.indireed.jobservice.dtos.JobDetailDto;
import com.indireed.jobservice.dtos.MessageResponseDto;
import com.indireed.jobservice.exceptions.ResourceNotFoundException;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Optional;
import java.util.UUID;

@Service
@AllArgsConstructor
public class JobServiceImpl implements JobService {
    private final JobRepository jobRepository;
    private final RestTemplate restTemplate;

    @Override
    public JobDetailDto create(UUID userId, CreateUpdateJobDto request) {
        Job job = new ModelMapper().map(request, Job.class);
        job.setUserId(userId);
        job = jobRepository.save(job);
        return new ModelMapper().map(job, JobDetailDto.class);
    }

    @Override
    public JobDetailDto update(UUID id,UUID userId, CreateUpdateJobDto request) {
        Optional<Job> job = jobRepository.findById(id);
        if (job.isEmpty())
            throw new ResourceNotFoundException("Job not found");
        if(job.get().getUserId() != userId)
            throw new AccessDeniedException("You are not allowed to edit this job");
        new ModelMapper().map(request, job.get());
        Job updatedJob = jobRepository.save(job.get());
        return new ModelMapper().map(updatedJob, JobDetailDto.class);
    }

    @Override
    public JobDetailDto getSingle(UUID id) {
        Optional<Job> job = jobRepository.findById(id);
        if (job.isEmpty())
            throw new ResourceNotFoundException("Job not found");
        return new ModelMapper().map(job.get(), JobDetailDto.class);
    }

    @Override
    public MessageResponseDto delete(UUID id, UUID userId) {
        Optional<Job> job = jobRepository.findById(id);
        if (job.isEmpty())
            throw new ResourceNotFoundException("Job not found");
        if(job.get().getUserId() != userId)
            throw new AccessDeniedException("You are not allowed to delete this job");
        jobRepository.delete(job.get());
        return new MessageResponseDto("Job deleted successfully");
    }

    @Override
    public Page<JobDetailDto> getAll(int page, int size, String query) {
        if (page < 1)
            page = 1;

        Pageable pageable = PageRequest.of(page, size);

        if (!query.isEmpty())
            return jobRepository.
                findAllByPositionIgnoreCaseLikeOrDescriptionIgnoreCaseLike(pageable, query, query)
                    .map(entity -> new ModelMapper().map(entity, JobDetailDto.class));
        else
            return jobRepository.
                findAll(pageable).map(entity -> new ModelMapper().map(entity, JobDetailDto.class));
    }

    @Override
    public MessageResponseDto apply(UUID id, UUID userId) {
        Optional<Job> job = jobRepository.findById(id);
        if (job.isEmpty())
            throw new ResourceNotFoundException("Job not found");
        // TODO: Call Rabbit MQ For application
        return new MessageResponseDto("Application submitted successfully");
    }
}

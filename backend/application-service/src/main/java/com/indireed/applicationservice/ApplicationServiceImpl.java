package com.indireed.applicationservice;

import com.indireed.applicationservice.dtos.ApplicationDetailDto;
import com.indireed.applicationservice.dtos.JobDetailDto;
import com.indireed.applicationservice.dtos.MessageResponseDto;
import com.indireed.applicationservice.dtos.UserDetailDto;
import com.indireed.applicationservice.exceptions.ResourceNotFoundException;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@AllArgsConstructor
public class ApplicationServiceImpl implements ApplicationService{
    private final ApplicationRepository applicationRepository;
    private final RestTemplate restTemplate;

    @Override
    public List<ApplicationDetailDto> findAllApplied(UUID userId) {
        List<ApplicationDetailDto> applicationList = new ArrayList<>();
        List<Application> applications = applicationRepository.findAllByUserId(userId);
        for (Application application : applications) {
            ApplicationDetailDto applicationDetailDto = new ModelMapper().map(application, ApplicationDetailDto.class);
            try {
                applicationDetailDto.setJob(restTemplate.getForObject("http://JOB-SERVICE/jobs/" + application.getJobId() + "/find", JobDetailDto.class));
            }catch (Exception ex) {
                ex.printStackTrace();
                applicationDetailDto.setJob(null);
            }
            applicationList.add(applicationDetailDto);
        }
        return applicationList;
    }

    @Override
    public List<ApplicationDetailDto> findAllByJob(UUID jobId) {
        List<ApplicationDetailDto> applicationList = new ArrayList<>();
        List<Application> applications = applicationRepository.findAllByJobId(jobId);
        for (Application application : applications) {
            ApplicationDetailDto applicationDetailDto = new ModelMapper().map(application, ApplicationDetailDto.class);
            try {
                applicationDetailDto.setUser(restTemplate.getForObject("http://USER-SERVICE/users/" + application.getUserId() + "/find", UserDetailDto.class));
            } catch (Exception ex) {
                ex.printStackTrace();
                applicationDetailDto.setUser(null);
            }
            applicationList.add(applicationDetailDto);
        }
        return applicationList;
    }

    @Override
    public MessageResponseDto manageApplication(UUID applicationId, ApplicationStatus status) {
        Optional<Application> application = applicationRepository.findById(applicationId);
        if (application.isEmpty())
            throw new ResourceNotFoundException("Application not found");
        application.get().setStatus(status);
        applicationRepository.save(application.get());
        return new MessageResponseDto("Application Status updated successfully");
    }
}

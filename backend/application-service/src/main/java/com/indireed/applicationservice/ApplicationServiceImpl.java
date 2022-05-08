package com.indireed.applicationservice;

import com.indireed.applicationservice.dtos.ApplicationDetailDto;
import com.indireed.applicationservice.dtos.MessageResponseDto;
import com.indireed.applicationservice.exceptions.ResourceNotFoundException;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
@AllArgsConstructor
public class ApplicationServiceImpl implements ApplicationService{
    private final ApplicationRepository applicationRepository;

    @Override
    public Page<ApplicationDetailDto> findAllApplied(int page, int size, UUID userId) {
        if (page < 1)
            page = 1;

        Pageable pageable = PageRequest.of(page - 1, size);
        return applicationRepository.
                findAllByUserId(pageable, userId).map(entity -> new ModelMapper().map(entity, ApplicationDetailDto.class));
    }

    @Override
    public Page<ApplicationDetailDto> findAllByJob(UUID jobId, int page, int size) {
        if (page < 1)
            page = 1;

        Pageable pageable = PageRequest.of(page - 1, size);
        return applicationRepository.
                findAllByJobId(pageable, jobId).map(entity -> new ModelMapper().map(entity, ApplicationDetailDto.class));
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

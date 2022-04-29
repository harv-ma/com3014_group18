package com.indireed.applicationservice;

import com.indireed.applicationservice.dtos.ApplicationDetailDto;
import com.indireed.applicationservice.dtos.MessageResponseDto;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@AllArgsConstructor
public class ApplicationServiceImpl implements ApplicationService{
    private final ApplicationRepository applicationRepository;

    @Override
    public Page<ApplicationDetailDto> findAllApplied(int page, int size) {
        return null;
    }

    @Override
    public Page<ApplicationDetailDto> findAllByJob(UUID jobId, int page, int size) {
        return null;
    }

    @Override
    public MessageResponseDto manageApplication(UUID jobId, ApplicationStatus status) {
        return null;
    }
}

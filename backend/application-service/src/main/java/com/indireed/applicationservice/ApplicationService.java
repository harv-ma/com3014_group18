package com.indireed.applicationservice;

import com.indireed.applicationservice.dtos.ApplicationDetailDto;
import com.indireed.applicationservice.dtos.MessageResponseDto;
import org.springframework.data.domain.Page;

import java.util.UUID;

public interface ApplicationService {
    Page<ApplicationDetailDto> findAllApplied(int page, int size, UUID userId);
    Page<ApplicationDetailDto> findAllByJob(UUID jobId, int page, int size);
    MessageResponseDto manageApplication(UUID jobId, ApplicationStatus status);
}

package com.indireed.applicationservice;

import com.indireed.applicationservice.dtos.ApplicationDetailDto;
import com.indireed.applicationservice.dtos.JobApplicationDTO;
import com.indireed.applicationservice.dtos.MessageResponseDto;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.UUID;

public interface ApplicationService {

    MessageResponseDto apply(JobApplicationDTO request);
    List<ApplicationDetailDto> findAllApplied(UUID userId);
    List<ApplicationDetailDto> findAllByJob(UUID jobId);
    MessageResponseDto manageApplication(UUID jobId, ApplicationStatus status);
}

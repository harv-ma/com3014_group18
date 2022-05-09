package com.indireed.jobservice;

import com.indireed.jobservice.dtos.CreateUpdateJobDto;
import com.indireed.jobservice.dtos.JobDetailDto;
import com.indireed.jobservice.dtos.MessageResponseDto;
import com.indireed.jobservice.dtos.OwnerJobDetailDto;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.UUID;

public interface JobService {
    JobDetailDto create(UUID userId, CreateUpdateJobDto request);
    JobDetailDto update(UUID id, UUID userId, CreateUpdateJobDto request);
    JobDetailDto getSingle(UUID id);
    MessageResponseDto delete(UUID id, UUID userId);
    List<JobDetailDto> getAll(String query);
    List<OwnerJobDetailDto> getAllMine(UUID userId);
    MessageResponseDto apply(UUID id, UUID userId);
}

package com.indireed.jobservice;

import com.indireed.jobservice.dtos.CreateUpdateJobDto;
import com.indireed.jobservice.dtos.JobDetailDto;
import com.indireed.jobservice.dtos.MessageResponseDto;
import org.springframework.data.domain.Page;

import java.util.UUID;

public interface JobService {
    JobDetailDto create(CreateUpdateJobDto request);
    JobDetailDto update(UUID id, CreateUpdateJobDto request);
    JobDetailDto getSingle(UUID id);
    MessageResponseDto delete(UUID id);
    Page<JobDetailDto> getAll(int page, int size, String query);
    MessageResponseDto apply(UUID id);
}

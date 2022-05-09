package com.indireed.jobservice.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class JobApplicationDTO {
    private UUID jobId;
    private UUID userId;
}

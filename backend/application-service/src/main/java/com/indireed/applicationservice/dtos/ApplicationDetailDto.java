package com.indireed.applicationservice.dtos;

import com.indireed.applicationservice.ApplicationStatus;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ApplicationDetailDto {
    private UUID id;
    private JobDetailDto job;
    private UserDetailDto user;
    private ApplicationStatus status;
    private Date dateCreated;
}

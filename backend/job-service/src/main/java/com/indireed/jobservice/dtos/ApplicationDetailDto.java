package com.indireed.jobservice.dtos;

import com.indireed.jobservice.ApplicationStatus;
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
    private UserDetailDto user;
    private ApplicationStatus status;
    private Date dateCreated;
}

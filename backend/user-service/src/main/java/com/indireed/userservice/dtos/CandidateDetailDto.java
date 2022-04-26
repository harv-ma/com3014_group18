package com.indireed.userservice.dtos;

import com.indireed.userservice.enums.JobSearchStatus;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CandidateDetailDto {
    private String firstName;
    private String lastName;
    private String occupation;
    private JobSearchStatus jobSearchStatus;
    private String bio;
    private String resumeUrl;
}

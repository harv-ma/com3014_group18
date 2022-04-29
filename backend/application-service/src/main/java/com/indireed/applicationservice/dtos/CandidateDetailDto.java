package com.indireed.applicationservice.dtos;

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
    private String bio;
    private String resumeUrl;
}

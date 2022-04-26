package com.indireed.userservice.dtos;

import com.indireed.userservice.enums.JobSearchStatus;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CandidateUpdateDto {
    @NotNull
    private String firstName;
    @NotNull
    private String lastName;
    @NotNull
    private String occupation;
    @NotNull
    private JobSearchStatus jobSearchStatus;
    @NotNull
    private String bio;
}

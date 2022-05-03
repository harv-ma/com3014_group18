package com.indireed.userservice.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserUpdateDto {
    private String email;
    private String phoneNumber;
    private CandidateUpdateDto candidate;
    private EmployerUpdateDto employer;
}

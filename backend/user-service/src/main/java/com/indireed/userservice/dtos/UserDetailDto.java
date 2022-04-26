package com.indireed.userservice.dtos;

import com.indireed.userservice.enums.UserType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserDetailDto {
    private UUID id;
    private String email;
    private String avatarUrl;
    private String phoneNumber;
    private UserType userType;
    private EmployerDetailDto employer;
    private CandidateDetailDto candidate;
}

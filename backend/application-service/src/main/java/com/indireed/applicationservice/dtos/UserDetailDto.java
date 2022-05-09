package com.indireed.applicationservice.dtos;

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
    private UUID userId;
    private CandidateDetailDto candidate;
}

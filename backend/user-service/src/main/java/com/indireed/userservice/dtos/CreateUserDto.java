package com.indireed.userservice.dtos;

import com.indireed.userservice.enums.UserType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CreateUserDto {
    @Email
    @NotNull
    private String email;
    @NotNull
    private String password;
    @NotNull
    private String phoneNumber;
    @NotNull
    private UserType userType;
    @NotNull
    private CreateCandidateDto candidate;
    @NotNull
    private CreateEmployerDto employer;
}

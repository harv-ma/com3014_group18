package com.indireed.userservice.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CreateCandidateDto {
    @NotNull
    private String firstName;
    @NotNull
    private String lastName;
    private String occupation;
}

package com.indireed.userservice.dtos;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class EmployerUpdateDto {
    @NotNull
    private String companyName;
    @NotNull
    private String description;
    @NotNull
    private String website;
    @NotNull
    private String address;
}

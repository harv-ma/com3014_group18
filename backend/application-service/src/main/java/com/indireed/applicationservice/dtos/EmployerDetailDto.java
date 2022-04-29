package com.indireed.applicationservice.dtos;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class EmployerDetailDto {
    private String companyName;
    private String description;
    private String website;
    private String address;
}

package com.indireed.applicationservice.dtos;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;
import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class JobDetailDto {
    private UUID id;
    private String position;
    private String description;
    private BigDecimal salary;
    private String Location;
    private Date deadline;
    private Date dateCreated;
    private UserDetailDto user;
}

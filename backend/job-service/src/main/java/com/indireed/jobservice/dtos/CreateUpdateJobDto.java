package com.indireed.jobservice.dtos;

import com.indireed.jobservice.JobType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CreateUpdateJobDto {
    @NotNull
    private String position;
    @NotNull
    private JobType jobType;
    @NotNull
    private String description;
    @NotNull
    private BigDecimal salary;
    @NotNull
    private String Location;
    @NotNull
    private Date deadline;
}

package com.indireed.jobservice.exceptions;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class ValidationErrorResponse {
    private String field;
    private String message;
}
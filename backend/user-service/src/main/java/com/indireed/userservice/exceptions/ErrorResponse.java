package com.indireed.userservice.exceptions;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import lombok.Data;

import java.util.List;

@Data
@JsonInclude(Include.NON_NULL)
public class ErrorResponse
{
 private String code;
 private String message;
 private List<ValidationErrorResponse> errors;

 public ErrorResponse(String code, String message) {
  this.code = code;
  this.message = message;
 }

 public ErrorResponse(String code, String message, List<ValidationErrorResponse> errors) {
  this.code = code;
  this.message = message;
  this.errors = errors;
 }
}
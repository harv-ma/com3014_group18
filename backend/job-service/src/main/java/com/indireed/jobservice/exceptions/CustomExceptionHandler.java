/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.indireed.jobservice.exceptions;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@ControllerAdvice
public class CustomExceptionHandler {
 @ExceptionHandler(HttpRequestMethodNotSupportedException.class)
 public ResponseEntity<ErrorResponse> methodNotSupportedExceptionHandler(HttpRequestMethodNotSupportedException ex, WebRequest request) {
  ErrorResponse errorResponse = new ErrorResponse("method_not_allowed", ". Use " + Objects.requireNonNull(ex.getSupportedMethods())[0]);
  return new ResponseEntity<>(errorResponse, HttpStatus.METHOD_NOT_ALLOWED);
 }

 @ExceptionHandler(MethodArgumentNotValidException.class)
 public ResponseEntity<ErrorResponse> methodArgumentNotValidExceptionHandler(MethodArgumentNotValidException ex, WebRequest request) {
  List<ValidationErrorResponse> validationErrors = new ArrayList<>();
  for (FieldError e : ex.getBindingResult().getFieldErrors()){
   validationErrors.add(new ValidationErrorResponse(e.getField(), e.getDefaultMessage()));
  }
  ErrorResponse errorResponse = new ErrorResponse("validation_error",  "Please ensure you filled all fields properly and with appropriate data", validationErrors);
  return new ResponseEntity<>(errorResponse, HttpStatus.UNPROCESSABLE_ENTITY);
 }

 @ExceptionHandler(ResourceNotFoundException.class)
 public final ResponseEntity<ErrorResponse> notFoundExceptionHandler(ResourceNotFoundException ex, WebRequest request) {
  ErrorResponse error = new ErrorResponse("not_found", ex.getLocalizedMessage());
  return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
 }

 @ExceptionHandler(BadRequestException.class)
 public final ResponseEntity<ErrorResponse> businessExceptionHandler(BadRequestException ex, WebRequest request) {
  ErrorResponse error = new ErrorResponse("bad_request", ex.getLocalizedMessage());
  return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
 }

 @ExceptionHandler(ConflictException.class)
 public final ResponseEntity<ErrorResponse> conflictExceptionHandler(ConflictException ex, WebRequest request) {
  ErrorResponse error = new ErrorResponse("conflict_error", ex.getLocalizedMessage());
  return new ResponseEntity<>(error, HttpStatus.CONFLICT);
 }

 @ExceptionHandler(Exception.class)
 public final ResponseEntity<ErrorResponse> handleAllExceptions(Exception ex, WebRequest request) {
  System.out.println(ex.getLocalizedMessage());
  ErrorResponse error = new ErrorResponse("server_error","Oops! We messed up :( please try again or contact our support team for assistance");
  return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
 }
}
package com.indireed.userservice.services;

import com.indireed.userservice.dtos.*;
import com.indireed.userservice.enums.UserType;
import org.springframework.data.domain.Page;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.UUID;

public interface UserService {
    HashMap login(LoginDTO request);
    UserDetailDto createUser(CreateUserDto request);
    MessageResponseDto uploadAvatar(MultipartFile file);
    UserDetailDto getProfile();
    UserDetailDto getSingle(UUID id);
    UserDetailDto update(UserUpdateDto request);
    MessageResponseDto uploadCandidateResume(MultipartFile file);
    Page<UserDetailDto> getAllByUserType(int page, int size, UserType userType, String query);
    MessageResponseDto changePassword(ChangePasswordDto request);
    MessageResponseDto sendPasswordReset(SendPasswordResetDto request);

    // String userId = request.getUserPrincipal().getName();
    // KeycloakAuthenticationToken principal = (KeycloakAuthenticationToken)
    // request.getUserPrincipal();
    // System.out.println("SHALOM1: " +
    // principal.getAccount().getKeycloakSecurityContext().getToken().getSubject());
}

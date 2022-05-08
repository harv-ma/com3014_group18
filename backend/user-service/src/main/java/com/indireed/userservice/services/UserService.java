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
    MessageResponseDto uploadAvatar(UUID userId, MultipartFile file);
    UserDetailDto getProfile(UUID userId);
    UserDetailDto getSingle(UUID userId);
    UserDetailDto update(UUID userId, UserUpdateDto request);
    MessageResponseDto uploadCandidateResume(UUID userId, MultipartFile file);
    MessageResponseDto changePassword(UUID userId, ChangePasswordDto request);
    MessageResponseDto sendPasswordReset(SendPasswordResetDto request);

}

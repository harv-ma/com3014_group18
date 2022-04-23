package com.indireed.userservice;

import com.indireed.userservice.dtos.*;

public interface UserService {
    UserDetailDto createUser(CreateUserDto request);
    MessageResponseDto changePassword(ChangePasswordDto request);
    MessageResponseDto sendPasswordReset(SendPasswordResetDto request);
    MessageResponseDto resetPassword(String token, ResetPasswordDto request);
}

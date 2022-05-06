package com.indireed.userservice.serviceImpl;

import com.indireed.userservice.dtos.*;
import com.indireed.userservice.enums.UserType;
import com.indireed.userservice.repositories.CandidateRepository;
import com.indireed.userservice.repositories.EmployerRepository;
import com.indireed.userservice.repositories.UserProfileRepository;
import com.indireed.userservice.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserProfileRepository userRepository;
    private final CandidateRepository candidateRepository;
    private final EmployerRepository employerRepository;
    private final PasswordEncoder passwordEncoder;
    @Value("${user-service.secret-key}")
    private String SECRET_KEY;
    @Value("${keycloak.realm}")
    public String realm;

    @Override
    public TokenResponseDTO login(LoginDTO request) {
        return null;
    }

    @Override
    public UserDetailDto createUser(CreateUserDto request) {
       return null;
    }

    @Override
    public MessageResponseDto uploadAvatar(MultipartFile file) {
        return null;
    }

    @Override
    public UserDetailDto getProfile() {
        return null;
    }

    @Override
    public UserDetailDto getSingle(UUID id) {
        return null;
    }

    @Override
    public UserDetailDto update(UserUpdateDto request) {
        return null;
    }

    @Override
    public MessageResponseDto uploadCandidateResume(MultipartFile file) {
        return null;
    }

    @Override
    public Page<UserDetailDto> getAllByUserType(int page, int size, UserType userType, String query) {
        return null;
    }

    @Override
    public MessageResponseDto changePassword(ChangePasswordDto request) {
        return null;
    }

    @Override
    @Transactional
    public MessageResponseDto sendPasswordReset(SendPasswordResetDto request) {
        return null;
    }

    @Override
    @Transactional
    public MessageResponseDto resetPassword(String token, ResetPasswordDto request) {
        return null;
    }
}

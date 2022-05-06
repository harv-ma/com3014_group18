package com.indireed.userservice.serviceImpl;

import com.indireed.userservice.dtos.*;
import com.indireed.userservice.enums.UserType;
import com.indireed.userservice.models.UserProfile;
import com.indireed.userservice.repositories.UserProfileRepository;
import com.indireed.userservice.services.UserService;
import lombok.RequiredArgsConstructor;
import org.keycloak.admin.client.resource.UsersResource;
import org.keycloak.representations.idm.CredentialRepresentation;
import org.keycloak.representations.idm.UserRepresentation;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.*;

import static com.indireed.userservice.KeycloakClientConfig.getKeyCloakInstance;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserProfileRepository userProfileRepository;

    @Override
    public TokenResponseDTO login(LoginDTO request) {
        return null;
    }

    @Override
    @Transactional
    public UserDetailDto createUser(CreateUserDto request) {
        CredentialRepresentation userPassword = new CredentialRepresentation();
        userPassword.setTemporary(false);
        userPassword.setType(CredentialRepresentation.PASSWORD);
        userPassword.setValue(request.getPassword());

        String userId = String.valueOf(UUID.randomUUID());
        UserRepresentation userRepresentation = new UserRepresentation();
        userRepresentation.setUsername(userId);
        userRepresentation.setEmail(request.getEmail());
        userRepresentation.setCredentials(Collections.singletonList(userPassword));
        userRepresentation.setRealmRoles(Collections.singletonList(request.getUserType().name()));
        userRepresentation.setEnabled(true);

        UsersResource instance = (UsersResource) getKeyCloakInstance();
        javax.ws.rs.core.Response res = instance.create(userRepresentation);
        System.out.println(res);

        UserProfile userProfile = new ModelMapper().map(request, UserProfile.class);
        userProfile.setUserId(userId);
        userProfileRepository.save(userProfile);
        UserDetailDto userDetailDto = new ModelMapper().map(request, UserDetailDto.class);
        userDetailDto.setEmail(request.getEmail());
        return userDetailDto;
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

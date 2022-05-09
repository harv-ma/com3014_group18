package com.indireed.userservice.serviceImpl;


import com.indireed.userservice.dtos.*;
import com.indireed.userservice.enums.UserType;
import com.indireed.userservice.exceptions.BadRequestException;
import com.indireed.userservice.exceptions.ResourceNotFoundException;
import com.indireed.userservice.models.Candidate;
import com.indireed.userservice.models.Employer;
import com.indireed.userservice.models.UserProfile;
import com.indireed.userservice.repositories.CandidateRepository;
import com.indireed.userservice.repositories.UserProfileRepository;
import com.indireed.userservice.services.CloudinaryService;
import com.indireed.userservice.services.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.keycloak.representations.idm.CredentialRepresentation;
import org.keycloak.representations.idm.UserRepresentation;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import javax.ws.rs.QueryParam;
import java.util.*;

import static com.indireed.userservice.config.KeycloakAdminClientConfig.getKeyCloak;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService {
    private final UserProfileRepository userProfileRepository;
    private final CandidateRepository candidateRepository;

    private final CloudinaryService cloudinaryService;

    @Value("${keycloak.realm}")
    private String realmName;

    @Value("${keycloak.auth-server-url}")
    private String baseUrl;
    private final RestTemplate restTemplate;


    @Override
    public HashMap login(LoginDTO request) {
        HttpHeaders headers = new HttpHeaders();

        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        MultiValueMap<String, String> cred = new LinkedMultiValueMap<>();
        cred.add("client_id", "user-service");
        cred.add("username", request.getEmail());
        cred.add("password", request.getPassword());
        cred.add("grant_type", "password");

        HttpEntity<MultiValueMap<String, String>> entity = new HttpEntity<>(cred, headers);

        try {
        ResponseEntity<HashMap> response = restTemplate.exchange(baseUrl+"/realms/"+realmName+"/protocol/openid-connect/token",
                HttpMethod.POST, entity, HashMap.class);
            return response.getBody();
        } catch (HttpClientErrorException ex) {
            ex.printStackTrace();
            throw new BadRequestException("Invalid username/password combination");
        }

    }

    @Override
    @Transactional
    public UserDetailDto createUser(CreateUserDto request) {
        if (request.getUserType().equals(UserType.CANDIDATE) && request.getCandidate() == null)
            throw new BadRequestException("Candidate details must be provided");

        if (request.getUserType().equals(UserType.EMPLOYER) && request.getEmployer() == null)
            throw new BadRequestException("Employer details must be provided");

        CredentialRepresentation userPassword = new CredentialRepresentation();
        userPassword.setTemporary(false);
        userPassword.setType(CredentialRepresentation.PASSWORD);
        userPassword.setValue(request.getPassword());

        String userId = String.valueOf(UUID.randomUUID());
        UserRepresentation userRepresentation = new UserRepresentation();
        userRepresentation.setUsername(userId);
        userRepresentation.setEmail(request.getEmail());
        userRepresentation.setCredentials(Collections.singletonList(userPassword));
        userRepresentation.setRealmRoles(List.of(request.getUserType().name().toLowerCase()));
        userRepresentation.setEnabled(true);

        try {
            getKeyCloak().realm(realmName).users().create(userRepresentation);
        } catch (Exception ex) {
            ex.printStackTrace();
        }

        UserProfile userProfile = new ModelMapper().map(request, UserProfile.class);
        userProfile.setUserId(UUID.fromString(userId));

        if (request.getUserType().equals(UserType.EMPLOYER)) {
            Employer employer = new ModelMapper().map(request.getEmployer(), Employer.class);
            userProfile.setCandidate(null);
            userProfile.setEmployer(employer);
            employer.setUserProfile(userProfile);
        }

        if (request.getUserType().equals(UserType.CANDIDATE)) {
            Candidate candidate = new ModelMapper().map(request.getCandidate(), Candidate.class);
            userProfile.setEmployer(null);
            userProfile.setCandidate(candidate);
            candidate.setUserProfile(userProfile);
        }


        userProfile = userProfileRepository.save(userProfile);
        UserDetailDto userDetailDto = new ModelMapper().map(userProfile, UserDetailDto.class);
        userDetailDto.setEmail(request.getEmail());
        return userDetailDto;
    }



    @Override
    public MessageResponseDto uploadAvatar(UUID userId, MultipartFile file) {
        UserProfile userProfile = userProfileRepository.findByUserId(userId);
        userProfile.setAvatarUrl(cloudinaryService.uploadFile(file));
        userProfileRepository.save(userProfile);
        return new MessageResponseDto("Avatar uploaded successfully");
    }

    @Override
    public UserDetailDto getProfile(UUID userId) {
        UserProfile userProfile = userProfileRepository.findByUserId(userId);
        UserDetailDto userDetailDto = new ModelMapper().map(userProfile, UserDetailDto.class);
        // userDetailDto.setEmail(getKeyCloak().realm(realmName).users().get("test@user.com").toRepresentation().getEmail());
        return userDetailDto;
    }

    @Override
    public UserDetailDto getSingle(UUID userId) {
        UserProfile userProfile = userProfileRepository.findByUserId(userId);
        if (userProfile == null) {
            throw new ResourceNotFoundException("User not found");
        }
        UserDetailDto userDetailDto = new ModelMapper().map(userProfile, UserDetailDto.class);
        // userDetailDto.setEmail(getKeyCloak().realm(realmName).users().get("test@user.com").toRepresentation().getEmail());
        return userDetailDto;
    }

    @Override
    public MessageResponseDto deleteUser(UUID userId) {
        UserProfile userProfile = userProfileRepository.findByUserId(userId);
        if (userProfile == null) {
            throw new ResourceNotFoundException("User not found");
        }
        userProfileRepository.delete(userProfile);
        getKeyCloak().realm(realmName).users().get(userId.toString()).remove();
        //TODO: Publish to RabbitMQ
        return new MessageResponseDto("User Deleted Successfully");
    }

    @Override
    public UserDetailDto update(UUID userId, UserUpdateDto request) {
        UserProfile userProfile = userProfileRepository.findByUserId(userId);
        if (userProfile.getUserType().equals(UserType.EMPLOYER)) {
            userProfile.setCandidate(null);
        }
        if (userProfile.getUserType().equals(UserType.CANDIDATE)) {
            userProfile.setEmployer(null);
        }
        new ModelMapper().map(request, userProfile);
        userProfile = userProfileRepository.save(userProfile);
        return new ModelMapper().map(userProfile, UserDetailDto.class);
    }

    @Override
    public MessageResponseDto uploadCandidateResume(UUID userId, MultipartFile file) {
        UserProfile userProfile = userProfileRepository.findByUserId(userId);
        userProfile.getCandidate().setResumeUrl(cloudinaryService.uploadFile(file));
        candidateRepository.save(userProfile.getCandidate());
        return new MessageResponseDto("Resume uploaded successfully");
    }

    @Override
    public MessageResponseDto changePassword(UUID userId, ChangePasswordDto request) {
        CredentialRepresentation cred = new CredentialRepresentation();
        cred.setType(CredentialRepresentation.PASSWORD);
        cred.setValue(request.getNewPassword());
        cred.setTemporary(false);
        getKeyCloak().realm(realmName).users().get(userId.toString()).resetPassword(cred);
        return new MessageResponseDto("Password updated successfully");
    }
}

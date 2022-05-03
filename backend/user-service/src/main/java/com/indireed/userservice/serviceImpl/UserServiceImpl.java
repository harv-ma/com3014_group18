package com.indireed.userservice.serviceImpl;

import com.indireed.userservice.dtos.*;
import com.indireed.userservice.enums.UserType;
import com.indireed.userservice.exceptions.BadRequestException;
import com.indireed.userservice.exceptions.ConflictException;
import com.indireed.userservice.exceptions.ResourceNotFoundException;
import com.indireed.userservice.models.Candidate;
import com.indireed.userservice.models.Employer;
import com.indireed.userservice.models.PasswordReset;
import com.indireed.userservice.models.User;
import com.indireed.userservice.repositories.CandidateRepository;
import com.indireed.userservice.repositories.EmployerRepository;
import com.indireed.userservice.repositories.PasswordResetRepository;
import com.indireed.userservice.repositories.UserRepository;
import com.indireed.userservice.services.UserService;
import lombok.RequiredArgsConstructor;
import org.apache.commons.codec.digest.HmacAlgorithms;
import org.apache.commons.codec.digest.HmacUtils;
import org.apache.commons.lang.RandomStringUtils;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.time.Duration;
import java.util.Date;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final CandidateRepository candidateRepository;
    private final EmployerRepository employerRepository;
    private final PasswordEncoder passwordEncoder;
    private final PasswordResetRepository passwordResetRepository;
    @Value("${user-service.secret-key}")
    private String SECRET_KEY;

    @Override
    public UserDetailDto createUser(CreateUserDto request) {
        if (userRepository.findByEmail(request.getEmail()).isPresent())
                throw new ConflictException("The email "+request.getEmail()+" already exists");

        if (request.getUserType().equals(UserType.CANDIDATE) && request.getCandidate() == null)
            throw new BadRequestException("Candidate details must be provided");

        if (request.getUserType().equals(UserType.EMPLOYER) && request.getEmployer() == null)
            throw new BadRequestException("Employer details must be provided");

        User user = new ModelMapper().map(request, User.class);
        user.setPassword(passwordEncoder.encode(request.getPassword()));


        if (request.getUserType().equals(UserType.EMPLOYER)) {
            Employer employer = new ModelMapper().map(request.getEmployer(), Employer.class);
            user.setCandidate(null);
            user.setEmployer(employer);
        }

        if (request.getUserType().equals(UserType.CANDIDATE)) {
            Candidate candidate = new ModelMapper().map(request.getCandidate(), Candidate.class);
            user.setEmployer(null);
            user.setCandidate(candidate);
        }

        user = userRepository.save(user);
        return new ModelMapper().map(user, UserDetailDto.class);
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
        Optional<User> user = userRepository.findById(id);
        if (user.isEmpty())
            throw new ResourceNotFoundException("User not found");
        return new ModelMapper().map(user.get(), UserDetailDto.class);
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
        if (page < 1)
            page = 1;

        Pageable pageable = PageRequest.of(page, size);

        if (userType == UserType.CANDIDATE) {
            if (query.isEmpty()) {
                return candidateRepository.
                        findAll(pageable).map(entity -> new ModelMapper().map(entity, UserDetailDto.class));
            } else {
                return candidateRepository.
                        findAllByFirstNameIgnoreCaseOrLastNameIgnoreCaseLike(pageable, query, query).map(
                                entity -> new ModelMapper().map(entity, UserDetailDto.class));
            }
        } else if (userType == UserType.EMPLOYER) {
            if (query.isEmpty()) {
                return employerRepository.
                        findAll(pageable).map(entity -> new ModelMapper().map(entity, UserDetailDto.class));
            } else {
                return employerRepository.
                        findAllByCompanyNameIgnoreCaseLike(pageable, query).map(
                                entity -> new ModelMapper().map(entity, UserDetailDto.class));
            }
        } else {
            throw new BadRequestException("Invalid UserType supplied");
        }
    }

    @Override
    public MessageResponseDto changePassword(ChangePasswordDto request) {
        return null;
    }

    @Override
    @Transactional
    public MessageResponseDto sendPasswordReset(SendPasswordResetDto request) {
        Optional<User> user = userRepository.findByEmail(request.getEmail());
        if (user.isEmpty())
            throw new ResourceNotFoundException("No user with email: "+request.getEmail()+" exist");
        if (user.get().getPasswordReset() != null)
            passwordResetRepository.delete(user.get().getPasswordReset());
        PasswordReset passwordReset = new PasswordReset();
        passwordReset.setTokenHash(new HmacUtils(HmacAlgorithms.HMAC_SHA_512, SECRET_KEY)
                .hmacHex(RandomStringUtils.random(15, true, true)));
        passwordReset.setUser(user.get());
        passwordResetRepository.save(passwordReset);
        // TODO: Call notification service to send out instructions
        return new MessageResponseDto("Please check your email for further instructions");
    }

    @Override
    @Transactional
    public MessageResponseDto resetPassword(String token, ResetPasswordDto request) {
        Optional<PasswordReset> passwordReset =
                passwordResetRepository.findByTokenHash(new HmacUtils(HmacAlgorithms.HMAC_SHA_512,
                        SECRET_KEY).hmacHex(token));
        if (passwordReset.isEmpty())
            throw new ResourceNotFoundException("Reset token not found");
        if (new Date().after(Date.from(passwordReset.get().getDateCreated().toInstant().plus(Duration.ofHours(4)))))
            throw new BadRequestException("Reset token is expired");
        User user = passwordReset.get().getUser();
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        userRepository.save(user);
        passwordResetRepository.delete(passwordReset.get());
        return new MessageResponseDto("Password reset was successful");
    }
}

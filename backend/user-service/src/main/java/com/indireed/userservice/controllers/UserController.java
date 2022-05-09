package com.indireed.userservice.controllers;

import com.indireed.userservice.Utility;
import com.indireed.userservice.enums.UserType;
import com.indireed.userservice.services.UserService;
import com.indireed.userservice.dtos.*;
import lombok.AllArgsConstructor;
import org.keycloak.adapters.springsecurity.token.KeycloakAuthenticationToken;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.HashMap;
import java.util.UUID;

@RestController
@RequestMapping(value="users")
@AllArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping(value="login")
    public ResponseEntity<HashMap> login(@RequestBody @Valid LoginDTO request) {
        return ResponseEntity.ok(userService.login(request));
    }

    @PostMapping(value="")
    public ResponseEntity<UserDetailDto> createUser(@RequestBody @Valid CreateUserDto request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(userService.createUser(request));
    }

    @PostMapping(value="upload-avatar")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<MessageResponseDto> uploadAvatar(HttpServletRequest request, @RequestPart(value = "file") MultipartFile file) {
        return ResponseEntity.ok(userService.uploadAvatar(Utility.getCurrentUserId(request), file));
    }

    @GetMapping(value="profile")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<UserDetailDto> getProfile(HttpServletRequest request) {
        return ResponseEntity.ok(userService.getProfile(Utility.getCurrentUserId(request)));
    }

    @GetMapping(value="{userId}/find")
    public ResponseEntity<UserDetailDto> getSingle(@PathVariable(value = "userId") UUID userId) {
        return ResponseEntity.ok(userService.getSingle(userId));
    }

    @PutMapping(value="")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<UserDetailDto> updateUser(HttpServletRequest request, @RequestBody @Valid UserUpdateDto userUpdateDto) {
        return ResponseEntity.ok(userService.update(Utility.getCurrentUserId(request), userUpdateDto));
    }

    @PostMapping(value="candidate/upload-resume")
    @PreAuthorize("hasRole('ROLE_CANDIDATE')")
    public ResponseEntity<MessageResponseDto> uploadResume(HttpServletRequest request, @RequestPart(value = "file") MultipartFile file) {
        return ResponseEntity.ok(userService.uploadCandidateResume(Utility.getCurrentUserId(request), file));
    }


    @PostMapping(value="change-password")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<MessageResponseDto> changePassword(HttpServletRequest request,
                                                             @RequestBody @Valid ChangePasswordDto changePasswordDto) {
        return ResponseEntity.ok(userService.changePassword(Utility.getCurrentUserId(request), changePasswordDto));
    }
}

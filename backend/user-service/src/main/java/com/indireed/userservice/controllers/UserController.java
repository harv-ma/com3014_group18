package com.indireed.userservice.controllers;

import com.indireed.userservice.enums.UserType;
import com.indireed.userservice.services.UserService;
import com.indireed.userservice.dtos.*;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.util.UUID;

@RestController
@RequestMapping(value="users")
@AllArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping(value="")
    public ResponseEntity<UserDetailDto> createUser(@RequestBody @Valid CreateUserDto request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(userService.createUser(request));
    }

    @PostMapping(value="upload-avatar")
    public ResponseEntity<MessageResponseDto> uploadAvatar(@RequestParam(value = "file") MultipartFile file) {
        return ResponseEntity.ok(userService.uploadAvatar(file));
    }

    @GetMapping(value="profile")
    public ResponseEntity<UserDetailDto> getProfile() {
        return ResponseEntity.ok(userService.getProfile());
    }

    @GetMapping(value="{id}")
    public ResponseEntity<UserDetailDto> getSingle(@PathVariable(value = "id") UUID id) {
        return ResponseEntity.ok(userService.getSingle(id));
    }

    @PutMapping(value="")
    public ResponseEntity<UserDetailDto> updateUser(@RequestBody @Valid UserUpdateDto request) {
        return ResponseEntity.ok(userService.update(request));
    }

    @PostMapping(value="candidate/upload-resume")
    public ResponseEntity<MessageResponseDto> uploadResume(@RequestParam(value = "file") MultipartFile file) {
        return ResponseEntity.ok(userService.uploadCandidateResume(file));
    }

    @GetMapping(value="")
    public ResponseEntity<Page<UserDetailDto>> getAllByUserType(@RequestParam(value = "page") int page,
                                                                @RequestParam(value = "size") int size,
                                                                @RequestParam(value = "userType") UserType userType,
                                                                @RequestParam(value = "query") String query) {
        return ResponseEntity.ok(userService.getAllByUserType(page, size, userType, query));
    }

    @PostMapping(value="change-password")
    public ResponseEntity<MessageResponseDto> changePassword(@RequestBody @Valid ChangePasswordDto request) {
        return ResponseEntity.ok(userService.changePassword(request));
    }

    @PostMapping(value="password-reset/send")
    public ResponseEntity<MessageResponseDto> sendPasswordReset(@RequestBody @Valid SendPasswordResetDto request) {
        return ResponseEntity.ok(userService.sendPasswordReset(request));
    }

    @PostMapping(value="reset-token/{token}")
    public ResponseEntity<MessageResponseDto> resetPassword(@PathVariable(value="token") String token,
                                                            @RequestBody @Valid ResetPasswordDto request) {
        return ResponseEntity.ok(userService.resetPassword(token, request));
    }
}

package com.indireed.userservice.services;

import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

public interface CloudinaryService {
    String uploadFile(MultipartFile file);
}

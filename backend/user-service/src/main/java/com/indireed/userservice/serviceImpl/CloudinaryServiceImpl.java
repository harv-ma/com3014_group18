package com.indireed.userservice.serviceImpl;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.indireed.userservice.exceptions.BadRequestException;
import com.indireed.userservice.services.CloudinaryService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Service
public class CloudinaryServiceImpl implements CloudinaryService {
    @Override
    public String uploadFile(MultipartFile file)  {
        Map config = new HashMap();
        config.put("cloud_name", "patrickoramah");
        config.put("api_key", "691519891549796");
        config.put("api_secret", "ycZSYhtNxaXmeukIg5dTHbdEcQs");
        Cloudinary cloudinaryConfig = new Cloudinary(config);

        try {
            Map uploadResult = cloudinaryConfig.uploader().upload(convertMultiPartToFile(file), ObjectUtils.emptyMap());

            return uploadResult.get("url").toString();
        } catch (Exception ex) {
            throw new BadRequestException(ex.getMessage());
        }
    }

    private File convertMultiPartToFile(MultipartFile file) throws IOException {
        File convFile = new File(file.getOriginalFilename());
        FileOutputStream fos = new FileOutputStream(convFile);
        fos.write(file.getBytes());
        fos.close();
        return convFile;
    }


}

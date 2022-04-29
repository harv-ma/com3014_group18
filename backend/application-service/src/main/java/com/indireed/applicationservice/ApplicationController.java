package com.indireed.applicationservice;

import com.indireed.applicationservice.dtos.ApplicationDetailDto;
import com.indireed.applicationservice.dtos.MessageResponseDto;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@AllArgsConstructor
@RequestMapping(value = "applications")
public class ApplicationController {
    private final ApplicationService applicationService;

    @GetMapping(value = "")
    public ResponseEntity<Page<ApplicationDetailDto>> findAllApplied(@RequestParam(value = "page") int page,
                                                                     @RequestParam(value = "size") int size) {
        return ResponseEntity.ok(applicationService.findAllApplied(page, size));
    }

    @GetMapping(value = "job/{jobId}")
    public ResponseEntity<Page<ApplicationDetailDto>> findAllByJob(@PathVariable(value = "jobId") UUID jobId,
                                                                   @RequestParam(value = "page") int page,
                                                                   @RequestParam(value = "size") int size) {
        return ResponseEntity.ok(applicationService.findAllByJob(jobId, page, size));
    }

    @PostMapping(value = "{id}")
    public ResponseEntity<MessageResponseDto> manageApplication(@PathVariable(value = "id") UUID id,
                                                                @RequestParam(value = "status") ApplicationStatus status) {
        return ResponseEntity.ok(applicationService.manageApplication(id, status));
    }
}

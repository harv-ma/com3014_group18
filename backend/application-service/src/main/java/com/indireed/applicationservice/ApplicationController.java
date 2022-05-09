package com.indireed.applicationservice;

import com.indireed.applicationservice.dtos.ApplicationDetailDto;
import com.indireed.applicationservice.dtos.JobApplicationDTO;
import com.indireed.applicationservice.dtos.MessageResponseDto;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.UUID;

@RestController
@AllArgsConstructor
@RequestMapping(value = "applications")
public class ApplicationController {
    private final ApplicationService applicationService;

    @PostMapping(value = "job/{jobId}/apply")
    public ResponseEntity<MessageResponseDto> apply(@RequestBody JobApplicationDTO request) {
        return ResponseEntity.ok(applicationService.apply(request));
    }

    @GetMapping(value = "")
    @PreAuthorize("hasRole('ROLE_CANDIDATE')")
    public ResponseEntity<List<ApplicationDetailDto>> findAllApplied(HttpServletRequest request) {
        return ResponseEntity.ok(applicationService.findAllApplied(Utility.getCurrentUserId(request)));
    }

    @GetMapping(value = "job/{jobId}")
    public ResponseEntity<List<ApplicationDetailDto>> findAllByJob(@PathVariable(value = "jobId") UUID jobId) {
        return ResponseEntity.ok(applicationService.findAllByJob(jobId));
    }

    @PostMapping(value = "{id}")
    @PreAuthorize("hasRole('ROLE_EMPLOYER')")
    public ResponseEntity<MessageResponseDto> manageApplication(@PathVariable(value = "id") UUID id,
                                                                @RequestParam(value = "status") ApplicationStatus status) {
        return ResponseEntity.ok(applicationService.manageApplication(id, status));
    }
}

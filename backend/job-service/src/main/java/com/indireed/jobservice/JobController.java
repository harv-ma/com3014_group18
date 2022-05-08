package com.indireed.jobservice;

import com.indireed.jobservice.dtos.CreateUpdateJobDto;
import com.indireed.jobservice.dtos.JobDetailDto;
import com.indireed.jobservice.dtos.MessageResponseDto;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.UUID;

@RestController
@RequestMapping(value = "jobs")
@AllArgsConstructor
public class JobController {
    private final JobService jobService;

    @PostMapping(value = "")
    @PreAuthorize("hasRole('ROLE_EMPLOYER')")
    public ResponseEntity<JobDetailDto> create(HttpServletRequest request,  @RequestBody @Valid CreateUpdateJobDto createUpdateJobDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(jobService.create(Utility.getCurrentUserId(request), createUpdateJobDto));
    }

    @PutMapping(value = "{id}")
    @PreAuthorize("hasRole('ROLE_EMPLOYER')")
    public ResponseEntity<JobDetailDto> update(HttpServletRequest request,
                                               @PathVariable(value = "id") UUID id,
                                               @RequestBody @Valid CreateUpdateJobDto createUpdateJobDto) {
        return ResponseEntity.ok(jobService.update(id, Utility.getCurrentUserId(request), createUpdateJobDto));
    }

    @GetMapping(value = "{id}/find")
    public ResponseEntity<JobDetailDto> getSingle(@PathVariable(value = "id") UUID id) {
        return ResponseEntity.ok(jobService.getSingle(id));
    }

    @DeleteMapping(value = "{id}")
    @PreAuthorize("hasRole('ROLE_EMPLOYER')")
    public ResponseEntity<MessageResponseDto> delete(HttpServletRequest request, @PathVariable(value = "id") UUID id) {
        return ResponseEntity.ok(jobService.delete(id, Utility.getCurrentUserId(request)));
    }

    @GetMapping(value = "")
    public ResponseEntity<Page<JobDetailDto>> getAll(@RequestParam(value = "page") int page,
                                                     @RequestParam(value = "size") int size,
                                                     @RequestParam(value = "query", required = false) String query) {
        return ResponseEntity.ok(jobService.getAll(page, size, query));
    }

    @GetMapping(value = "mine")
    @PreAuthorize("hasRole('ROLE_EMPLOYER')")
    public ResponseEntity<Page<JobDetailDto>> getAllMine(HttpServletRequest request,
                                                         @RequestParam(value = "page") int page,
                                                     @RequestParam(value = "size") int size) {
        return ResponseEntity.ok(jobService.getAllMine(page, size, Utility.getCurrentUserId(request)));
    }

    @PostMapping(value = "{id}/apply")
    @PreAuthorize("hasRole('ROLE_CANDIDATE')")
    public ResponseEntity<MessageResponseDto> apply(HttpServletRequest request, @PathVariable(value = "id") UUID id) {
        return ResponseEntity.ok(jobService.apply(id, Utility.getCurrentUserId(request)));
    }
}

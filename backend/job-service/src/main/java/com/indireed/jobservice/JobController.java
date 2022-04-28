package com.indireed.jobservice;

import com.indireed.jobservice.dtos.CreateUpdateJobDto;
import com.indireed.jobservice.dtos.JobDetailDto;
import com.indireed.jobservice.dtos.MessageResponseDto;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.UUID;

@RestController
@RequestMapping(value = "jobs")
@AllArgsConstructor
public class JobController {
    private final JobService jobService;

    @PostMapping(value = "")
    public ResponseEntity<JobDetailDto> create(@RequestBody @Valid CreateUpdateJobDto request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(jobService.create(request));
    }

    @PutMapping(value = "{id}")
    public ResponseEntity<JobDetailDto> update(@PathVariable(value = "id") UUID id,
                                               @RequestBody @Valid CreateUpdateJobDto request) {
        return ResponseEntity.ok(jobService.update(id, request));
    }

    @GetMapping(value = "{id}")
    public ResponseEntity<JobDetailDto> getSingle(@PathVariable(value = "id") UUID id) {
        return ResponseEntity.ok(jobService.getSingle(id));
    }

    @DeleteMapping(value = "{id}")
    public ResponseEntity<MessageResponseDto> delete(@PathVariable(value = "id") UUID id) {
        return ResponseEntity.ok(jobService.delete(id));
    }

    @DeleteMapping(value = "")
    public ResponseEntity<Page<JobDetailDto>> getAll(@RequestParam(value = "page") int page,
                                                     @RequestParam(value = "size") int size,
                                                     @RequestParam(value = "query") String query) {
        return ResponseEntity.ok(jobService.getAll(page, size, query));
    }

    @PostMapping(value = "{id}/apply")
    public ResponseEntity<MessageResponseDto> getAll(@PathVariable(value = "id") UUID id) {
        return ResponseEntity.ok(jobService.apply(id));
    }
}

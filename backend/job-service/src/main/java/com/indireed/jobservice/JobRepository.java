package com.indireed.jobservice;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface JobRepository extends JpaRepository<Job, UUID> {
    List<Job> findAllByPositionContainingIgnoreCaseOrDescriptionContainingIgnoreCase(String position, String description);
    List<Job> findAllByUserId(UUID userId);
}

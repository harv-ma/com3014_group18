package com.indireed.applicationservice;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ApplicationRepository extends JpaRepository<Application, UUID> {
    Page<Application> findAllByUserId(Pageable pageable, UUID userId);
    Page<Application> findAllByJobId(Pageable pageable, UUID jobId);
}

package com.indireed.applicationservice;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface ApplicationRepository extends JpaRepository<Application, UUID> {
    List<Application> findAllByUserId(UUID userId);
    List<Application> findAllByJobId(UUID jobId);
}

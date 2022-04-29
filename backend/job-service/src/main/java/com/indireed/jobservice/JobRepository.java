package com.indireed.jobservice;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface JobRepository extends JpaRepository<Job, UUID> {
    Page<Job> findAllByPositionIgnoreCaseLikeOrDescriptionIgnoreCaseLike(Pageable pageable,
                                                                         String position, String description);
}

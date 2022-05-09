package com.indireed.jobservice;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface JobRepository extends JpaRepository<Job, UUID> {
    @Query(value = "SELECT j from Job j WHERE lower(j.position) like lower(concat('%', ?1,'%')) " +
            "OR lower(j.description) like lower(concat('%', ?1,'%')) OR lower(j.Location) like lower(concat('%', ?1,'%'))")
    List<Job> search(String query);
    List<Job> findAllByUserId(UUID userId);
}

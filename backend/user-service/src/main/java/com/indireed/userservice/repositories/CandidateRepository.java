package com.indireed.userservice.repositories;

import com.indireed.userservice.models.Candidate;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface CandidateRepository extends JpaRepository<Candidate, UUID> {
    Page<Candidate> findAllByFirstNameIgnoreCaseOrLastNameIgnoreCaseLike(Pageable pageable, String firstName, String lastName);
}

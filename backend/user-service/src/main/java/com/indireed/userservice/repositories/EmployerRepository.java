package com.indireed.userservice.repositories;

import com.indireed.userservice.models.Employer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface EmployerRepository extends JpaRepository<Employer, UUID> {
    Page<Employer> findAllByCompanyNameIgnoreCaseLike(Pageable pageable, String query);
}

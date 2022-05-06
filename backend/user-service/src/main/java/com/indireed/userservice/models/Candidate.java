package com.indireed.userservice.models;

import com.indireed.userservice.enums.JobSearchStatus;
import lombok.*;
import org.hibernate.Hibernate;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;
import java.util.UUID;

@Entity
@Table(name = "candidates")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Candidate {
    @Id
    @GeneratedValue
    private UUID id;
    private UUID userId;
    private String firstName;
    private String lastName;
    private String occupation;
    @Enumerated(EnumType.STRING)
    private JobSearchStatus jobSearchStatus;
    @Column(columnDefinition = "TEXT")
    private String bio;
    private String resumeUrl;
    @Column(updatable=false)
    @CreationTimestamp
    private Date dateCreated;

    @UpdateTimestamp
    private Date dateUpdated;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Candidate candidate = (Candidate) o;
        return id != null && Objects.equals(id, candidate.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}

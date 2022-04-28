package com.indireed.jobservice;

import lombok.*;
import org.hibernate.Hibernate;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;
import java.util.Objects;
import java.util.UUID;

@Entity
@Table(name = "jobs")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Job {
    @Id
    @GeneratedValue
    private UUID id;
    private UUID userId;
    private String position;
    @Enumerated(EnumType.STRING)
    private JobType jobType;
    @Column(columnDefinition = "TEXT")
    private String description;
    private BigDecimal salary;
    private String Location;
    private Date deadline;

    @Column(updatable=false)
    @CreationTimestamp
    private Date dateCreated;

    @UpdateTimestamp
    private Date dateUpdated;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Job job = (Job) o;
        return id != null && Objects.equals(id, job.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}

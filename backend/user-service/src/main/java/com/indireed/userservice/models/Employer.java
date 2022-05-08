package com.indireed.userservice.models;

import lombok.*;
import org.hibernate.Hibernate;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;
import java.util.UUID;

@Entity
@Table(name = "employers")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Employer {
    @Id
    @GeneratedValue
    private UUID id;
    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_profile_id", nullable = false)
    @ToString.Exclude
    private UserProfile userProfile;
    private String companyName;
    @Column(columnDefinition = "TEXT")
    private String description;
    private String website;
    private String address;

    @Column(updatable=false)
    @CreationTimestamp
    private Date dateCreated;

    @UpdateTimestamp
    private Date dateUpdated;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Employer employer = (Employer) o;
        return id != null && Objects.equals(id, employer.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}

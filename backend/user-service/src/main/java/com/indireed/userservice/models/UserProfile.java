package com.indireed.userservice.models;

import com.indireed.userservice.enums.UserType;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Date;
import java.util.UUID;

@Entity
@Table(name = "user_profiles")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class UserProfile {
    @Id
    @GeneratedValue
    private UUID id;
    private UUID userId;
    private String avatarUrl;
    private String phoneNumber;
    @Enumerated(EnumType.STRING)
    private UserType userType;
    @OneToOne(fetch = FetchType.LAZY,
            cascade = CascadeType.ALL,
            mappedBy = "userProfile")
    @ToString.Exclude
    private Employer employer;
    @OneToOne(fetch = FetchType.LAZY,
            cascade = CascadeType.ALL,
            mappedBy = "userProfile")
    @ToString.Exclude
    private Candidate candidate;
    @Column(updatable=false)
    @CreationTimestamp
    private Date dateCreated;

    @UpdateTimestamp
    private Date dateUpdated;
}

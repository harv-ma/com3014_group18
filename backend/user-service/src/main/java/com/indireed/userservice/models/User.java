package com.indireed.userservice.models;

import com.indireed.userservice.enums.UserType;
import lombok.*;
import org.hibernate.Hibernate;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;
import java.util.UUID;

@Entity
@Table(name = "users")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class User {
    @Id
    @GeneratedValue
    private UUID id;
    private String avatarUrl;
    private String email;
    private String phoneNumber;
    private String password;
    @Enumerated(EnumType.STRING)
    private UserType userType;

    @OneToOne(mappedBy = "user")
    private PasswordReset passwordReset;

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "user")
    private Employer employer;

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "user")
    private Candidate candidate;

    @Column(updatable=false)
    @CreationTimestamp
    private Date dateCreated;

    @UpdateTimestamp
    private Date dateUpdated;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        User user = (User) o;
        return id != null && Objects.equals(id, user.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}

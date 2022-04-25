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
@Table(name = "password_resets")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class PasswordReset {
    @Id
    @GeneratedValue
    private UUID id;

    @OneToOne
    @JoinColumn(referencedColumnName = "id")
    private User user;

    @Column(unique = true, nullable=false)
    private String tokenHash;

    @Column(updatable=false)
    @CreationTimestamp
    private Date dateCreated;

    @UpdateTimestamp
    private Date dateUpdated;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        PasswordReset that = (PasswordReset) o;
        return id != null && Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}

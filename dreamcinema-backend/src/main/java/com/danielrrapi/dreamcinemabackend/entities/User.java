package com.danielrrapi.dreamcinemabackend.entities;

import com.danielrrapi.dreamcinemabackend.enums.UserRole;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@Table(name = "users")
@Entity
public class User {
    @Id
    @Setter(AccessLevel.NONE)
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String name;

    private String surname;

    private LocalDate dob;

    @Column(name = "user_role")
    private UserRole userRole;

    public User(String name, String surname, LocalDate dob) {
        this.name = name;
        this.surname = surname;
        this.dob = dob;
        this.userRole = UserRole.USER;
    }
}

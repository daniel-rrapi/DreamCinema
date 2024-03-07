package com.danielrrapi.dreamcinemabackend.entities;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Setter
@Getter
@NoArgsConstructor
@Entity
@Table(name = "movie_rooms")
public class MovieRoom {
    @Id
    @Setter(AccessLevel.NONE)
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String name;

    private String[] seats;

    public MovieRoom(String name, String[] seats) {
        this.name = name;
        this.seats = seats;
    }
}

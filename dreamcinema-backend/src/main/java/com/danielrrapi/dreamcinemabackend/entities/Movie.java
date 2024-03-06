package com.danielrrapi.dreamcinemabackend.entities;

import com.danielrrapi.dreamcinemabackend.enums.MovieGenre;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.UUID;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "movies")
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String title;

    private String description;

    private int year;

    private String posterUrl;

    private MovieGenre[] genres;

    @Column(name = "screening_dates")
    private LocalDateTime[] screeningDates;


}

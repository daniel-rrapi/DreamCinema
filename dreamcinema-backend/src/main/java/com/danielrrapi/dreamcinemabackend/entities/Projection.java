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
@Table(name = "projections")
public class Projection {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Setter(AccessLevel.NONE)
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "movie_id")
    private Movie movie;

    @ManyToOne
    @JoinColumn(name = "day_id")
    private Day day;

    @ManyToOne
    @JoinColumn(name = "screening_time_id")
    private ScreeningTime screeningTime;

    @ManyToOne
    @JoinColumn(name = "movie_room_id")
    private MovieRoom movieRoom;

    public Projection(Movie movie, Day day, ScreeningTime screeningTime, MovieRoom movieRoom) {
        this.movie = movie;
        this.day = day;
        this.screeningTime = screeningTime;
        this.movieRoom = movieRoom;
    }
}

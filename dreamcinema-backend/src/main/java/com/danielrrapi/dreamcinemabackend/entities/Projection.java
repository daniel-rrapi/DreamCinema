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
    private Movie movieId;

    @ManyToOne
    @JoinColumn(name = "day_id")
    private Day dayId;

    @ManyToOne
    @JoinColumn(name = "screening_time_id")
    private ScreeningTime screeningTimeId;

    @ManyToOne
    @JoinColumn(name = "movie_room_id")
    private MovieRoom movieRoomId;

    public Projection(Movie movieId, Day dayId, ScreeningTime screeningTimeId, MovieRoom movieRoomId) {
        this.movieId = movieId;
        this.dayId = dayId;
        this.screeningTimeId = screeningTimeId;
        this.movieRoomId = movieRoomId;
    }
}

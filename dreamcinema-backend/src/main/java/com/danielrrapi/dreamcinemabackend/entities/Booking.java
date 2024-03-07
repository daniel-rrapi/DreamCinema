package com.danielrrapi.dreamcinemabackend.entities;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.UUID;

@Setter
@Getter
@NoArgsConstructor
@Entity
@Table(name = "bookings")
public class Booking {
    @Id
    @Setter(AccessLevel.NONE)
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "booking_date")
    private LocalDateTime bookingDate;

    @Column(name = "screening_date")
    private LocalDateTime screeningDate;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "movie_id")
    private Movie movie;

    @ManyToOne
    @JoinColumn(name = "movie_room_id")
    private MovieRoom movieRoom;

    public Booking(LocalDateTime bookingDate, LocalDateTime screeningDate, User user, Movie movie, MovieRoom movieRoom) {
        this.bookingDate = bookingDate;
        this.screeningDate = screeningDate;
        this.user = user;
        this.movie = movie;
        this.movieRoom = movieRoom;
    }
}

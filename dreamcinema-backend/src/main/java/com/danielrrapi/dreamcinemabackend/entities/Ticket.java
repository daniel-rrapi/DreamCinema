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
@Table(name = "bookings")
public class Ticket {
    @Id
    @Setter(AccessLevel.NONE)
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "projection_id")
    private Projection projection;

    @ManyToOne
    @JoinColumn(name = "seat_id")
    private Seat seat;

    public Ticket(User user, Projection projection, Seat seat) {
        this.user = user;
        this.projection = projection;
        this.seat = seat;
    }
}

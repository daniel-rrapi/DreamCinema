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
    private User userId;

    @ManyToOne
    @JoinColumn(name = "projection_id")
    private Projection projectionId;

    @ManyToOne
    @JoinColumn(name = "seat_id")
    private Seat seatId;

    public Ticket(User userId, Projection projectionId, Seat seatId) {
        this.userId = userId;
        this.projectionId = projectionId;
        this.seatId = seatId;
    }
}

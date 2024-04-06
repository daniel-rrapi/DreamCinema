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
@Table(name = "seats")
public class Seat {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Setter(AccessLevel.NONE)
    private UUID id;

    private int number;

    @Column(name = "is_booked")
    private boolean isBooked;

    @ManyToOne
    @JoinColumn(name = "projection_id")
    private Projection projection;

    public Seat(int number, boolean isBooked, Projection projectionId) {
        this.number = number;
        this.isBooked = isBooked;
        this.projection = projectionId;
    }
}

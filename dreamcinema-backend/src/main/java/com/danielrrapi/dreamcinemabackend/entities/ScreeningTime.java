package com.danielrrapi.dreamcinemabackend.entities;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalTime;
import java.util.UUID;

@Setter
@Getter
@NoArgsConstructor
@Entity
@Table(name = "screenings_times")
public class ScreeningTime {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Setter(AccessLevel.NONE)
    private UUID id;

    @Column(name = "start_time")
    private LocalTime startTime;

    public ScreeningTime(LocalTime startTime) {
        this.startTime = startTime;
    }
}

package com.danielrrapi.dreamcinemabackend.payloads;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotBlank;

import java.time.LocalDate;
import java.time.LocalTime;

public record ModifiedProjectionDTO(@NotBlank String id,
                                    @NotBlank(message = "MovieId cannot be blank") String movie,
                                    @NotBlank(message = "ScreeningTime cannot be blank") @JsonFormat(pattern = "HH:mm") LocalTime screeningTime,
                                    @NotBlank(message = "DayId cannot be blank") @FutureOrPresent(message = "The day cannot be in the past") @JsonFormat(pattern = "yyyy-MM-dd") LocalDate day,
                                    @NotBlank(message = "MovieRoomId cannot be blank") String movieRoom) {
}

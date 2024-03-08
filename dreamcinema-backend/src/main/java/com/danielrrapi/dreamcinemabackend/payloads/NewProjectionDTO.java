package com.danielrrapi.dreamcinemabackend.payloads;

import jakarta.validation.constraints.NotBlank;

public record NewProjectionDTO(@NotBlank(message = "MovieId cannot be blank") String movieId,
                               @NotBlank(message = "ScreeningTimeId cannot be blank") String screeningTimeId,
                               @NotBlank(message = "DayId cannot be blank") String dayId,
                               @NotBlank(message = "MovieRoomId cannot be blank") String movieRoomId
                               ) {
}

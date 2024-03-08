package com.danielrrapi.dreamcinemabackend.payloads;

import jakarta.validation.constraints.NotBlank;

public record NewMovieRoomDTO(@NotBlank String name) {
}

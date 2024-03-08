package com.danielrrapi.dreamcinemabackend.payloads;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record NewSeatDTO(@NotBlank(message = "Number cant be blank") int number,
                         @NotNull(message = "isBooked cant be null") boolean isBooked,
                         @NotBlank(message = "projectionId cant be blank") String projectionId
                         ) {
}

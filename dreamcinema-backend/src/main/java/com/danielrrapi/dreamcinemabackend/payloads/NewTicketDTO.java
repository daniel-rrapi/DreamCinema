package com.danielrrapi.dreamcinemabackend.payloads;

import jakarta.validation.constraints.NotBlank;

public record NewTicketDTO(@NotBlank String user, @NotBlank String projection, @NotBlank String seat) {
}

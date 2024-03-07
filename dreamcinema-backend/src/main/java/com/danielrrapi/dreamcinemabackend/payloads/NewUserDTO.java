package com.danielrrapi.dreamcinemabackend.payloads;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

import java.time.LocalDate;

public record NewUserDTO(
        @NotBlank
        String name,
        @NotBlank
        String surname,
        @Email
        String email,
        @NotBlank
        String password,
        @NotBlank
        LocalDate dob

) {
}

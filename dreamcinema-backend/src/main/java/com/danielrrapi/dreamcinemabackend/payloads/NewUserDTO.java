package com.danielrrapi.dreamcinemabackend.payloads;

import com.fasterxml.jackson.annotation.JsonFormat;
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
        @JsonFormat(pattern = "yyyy/MM/dd", shape = JsonFormat.Shape.STRING)
        LocalDate dob

) {
}

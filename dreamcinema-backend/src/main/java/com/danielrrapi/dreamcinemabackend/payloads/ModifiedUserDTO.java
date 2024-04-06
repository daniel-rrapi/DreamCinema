package com.danielrrapi.dreamcinemabackend.payloads;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.constraints.NotBlank;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

public record ModifiedUserDTO(@NotBlank String firstname, @NotBlank String lastname, @NotBlank String email, @JsonFormat(pattern = "yyyy/MM/dd") LocalDate dob) {
}

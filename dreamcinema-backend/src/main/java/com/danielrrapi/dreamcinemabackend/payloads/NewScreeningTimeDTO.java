package com.danielrrapi.dreamcinemabackend.payloads;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.constraints.NotBlank;

import java.time.LocalDate;
import java.time.LocalTime;

public record NewScreeningTimeDTO(@NotBlank @JsonFormat(pattern = "HH:mm") LocalTime startTime) {
}

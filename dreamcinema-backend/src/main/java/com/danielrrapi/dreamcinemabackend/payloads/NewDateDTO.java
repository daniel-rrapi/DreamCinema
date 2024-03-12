package com.danielrrapi.dreamcinemabackend.payloads;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.constraints.FutureOrPresent;

import java.time.LocalDate;
import java.time.LocalTime;

public record NewDateDTO(@FutureOrPresent(message = "The day cannot be in the past") @JsonFormat(pattern = "yyyy-MM-dd") LocalDate date) {
}

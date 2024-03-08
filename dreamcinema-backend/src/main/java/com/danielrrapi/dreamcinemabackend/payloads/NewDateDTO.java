package com.danielrrapi.dreamcinemabackend.payloads;

import jakarta.validation.constraints.FutureOrPresent;

import java.time.LocalDate;

public record NewDateDTO(@FutureOrPresent(message = "The day cannot be in the past") LocalDate date) {
}

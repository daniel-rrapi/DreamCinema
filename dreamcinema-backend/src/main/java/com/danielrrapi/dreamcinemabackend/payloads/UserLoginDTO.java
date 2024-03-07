package com.danielrrapi.dreamcinemabackend.payloads;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record UserLoginDTO(
        @Email
        String email,
        @NotBlank
        String password
) {
}

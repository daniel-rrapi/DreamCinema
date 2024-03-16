package com.danielrrapi.dreamcinemabackend.controllers;

import com.danielrrapi.dreamcinemabackend.entities.User;
import com.danielrrapi.dreamcinemabackend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/me")
    public User getProfile(@AuthenticationPrincipal User currentAuthenticatedUser) {return currentAuthenticatedUser;}
}

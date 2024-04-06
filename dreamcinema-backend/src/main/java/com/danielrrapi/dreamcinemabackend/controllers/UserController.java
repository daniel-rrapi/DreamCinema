package com.danielrrapi.dreamcinemabackend.controllers;

import com.danielrrapi.dreamcinemabackend.entities.User;
import com.danielrrapi.dreamcinemabackend.payloads.ModifiedUserDTO;
import com.danielrrapi.dreamcinemabackend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/me")
    public User getProfile(@AuthenticationPrincipal User currentAuthenticatedUser) {return currentAuthenticatedUser;}

    @PutMapping("/{id}")
    public User modifyUser(@PathVariable String id, @RequestBody ModifiedUserDTO payload) {
        return userService.modifyUser(payload, id);
    }
}

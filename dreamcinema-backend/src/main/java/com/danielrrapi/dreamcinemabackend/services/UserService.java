package com.danielrrapi.dreamcinemabackend.services;

import com.danielrrapi.dreamcinemabackend.entities.User;
import com.danielrrapi.dreamcinemabackend.exceptions.NotFoundExcpetion;
import com.danielrrapi.dreamcinemabackend.payloads.ModifiedUserDTO;
import com.danielrrapi.dreamcinemabackend.repositories.UserDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class UserService {
    @Autowired
    private UserDAO userDAO;

    public User findById(UUID id) {
        return userDAO.findById(id).orElseThrow(() -> new NotFoundExcpetion("The user with id: " + id + " not found"));
    }

    public User findByEmail(String email) {
        return userDAO.findByEmail(email).orElseThrow(() -> new NotFoundExcpetion("User with email: "+ email + " not found"));
    }

    public User modifyUser(ModifiedUserDTO payload, String userId) {
        User found = this.findById(UUID.fromString(userId));
        found.setName(payload.firstname());
        found.setSurname(payload.lastname());
        found.setEmail(payload.email());
        found.setDob(payload.dob());
        return userDAO.save(found);
    }
}

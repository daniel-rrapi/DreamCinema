package com.danielrrapi.dreamcinemabackend.services;

import com.danielrrapi.dreamcinemabackend.repositories.UserDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserDAO userDAO;
}

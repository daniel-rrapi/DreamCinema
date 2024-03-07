package com.danielrrapi.dreamcinemabackend.services;

import com.danielrrapi.dreamcinemabackend.entities.User;
import com.danielrrapi.dreamcinemabackend.exceptions.BadRequestException;
import com.danielrrapi.dreamcinemabackend.exceptions.UnauthorizedException;
import com.danielrrapi.dreamcinemabackend.payloads.NewUserDTO;
import com.danielrrapi.dreamcinemabackend.payloads.UserLoginDTO;
import com.danielrrapi.dreamcinemabackend.repositories.UserDAO;
import com.danielrrapi.dreamcinemabackend.security.JWTTools;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    @Autowired
    private UserService userService;
    @Autowired
    private UserDAO userDAO;
    @Autowired
    private JWTTools jwtTools;
    @Autowired
    private PasswordEncoder bCrypt;

    public String authenticateUserAndGenerateToken(UserLoginDTO payload) {
        User user = userService.findByEmail(payload.email());
        if(bCrypt.matches(payload.password(), user.getPassword())) {
            return jwtTools.createToken(user);
        } else {
            throw new UnauthorizedException("Wrong email or password");
        }
    }

    public User saveUser(NewUserDTO payload) {
        userDAO.findByEmail(payload.email()).ifPresent(user -> {
            throw new BadRequestException("Email " + payload.email() + " is already used");
        });
        User newUser = new User(payload.name(), payload.surname(), payload.email(), bCrypt.encode(payload.password()), payload.dob());
        return userDAO.save(newUser);
    }
}

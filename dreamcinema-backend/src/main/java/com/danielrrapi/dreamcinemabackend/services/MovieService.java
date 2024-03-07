package com.danielrrapi.dreamcinemabackend.services;

import com.danielrrapi.dreamcinemabackend.repositories.MovieDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MovieService {
    @Autowired
    private MovieDAO movieDAO;
}

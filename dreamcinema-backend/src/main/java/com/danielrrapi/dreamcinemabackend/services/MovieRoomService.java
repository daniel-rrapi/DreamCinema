package com.danielrrapi.dreamcinemabackend.services;

import com.danielrrapi.dreamcinemabackend.repositories.MovieRoomDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MovieRoomService {
    @Autowired
    private MovieRoomDAO movieRoomDAO;
}

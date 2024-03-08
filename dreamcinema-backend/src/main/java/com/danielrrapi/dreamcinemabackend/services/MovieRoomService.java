package com.danielrrapi.dreamcinemabackend.services;

import com.danielrrapi.dreamcinemabackend.entities.MovieRoom;
import com.danielrrapi.dreamcinemabackend.exceptions.NotFoundExcpetion;
import com.danielrrapi.dreamcinemabackend.payloads.NewMovieRoomDTO;
import com.danielrrapi.dreamcinemabackend.repositories.MovieRoomDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class MovieRoomService {
    @Autowired
    private MovieRoomDAO movieRoomDAO;

    public Page<MovieRoom> findAllMovieRooms(int pageNumber, int size, String orderBy) {
        if(size > 100) size = 100;
        Pageable pageable = PageRequest.of(pageNumber, size, Sort.by(orderBy));
        return movieRoomDAO.findAll(pageable);
    }

    public MovieRoom findMovieRoomById(String id) {
        return movieRoomDAO.findById(UUID.fromString(id)).orElseThrow(()-> new NotFoundExcpetion("The Movie Room with id: " + id + " was not found"));
    }

    public MovieRoom save(NewMovieRoomDTO payload) {
        return movieRoomDAO.save(new MovieRoom(payload.name()));
    }

    public MovieRoom deleteMovieRoomById(String id) {
        MovieRoom found = this.findMovieRoomById(id);
        movieRoomDAO.delete(found);
        return found;
    }
}

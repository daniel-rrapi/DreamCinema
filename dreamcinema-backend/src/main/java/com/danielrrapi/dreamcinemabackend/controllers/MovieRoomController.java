package com.danielrrapi.dreamcinemabackend.controllers;

import com.danielrrapi.dreamcinemabackend.entities.MovieRoom;
import com.danielrrapi.dreamcinemabackend.payloads.NewMovieRoomDTO;
import com.danielrrapi.dreamcinemabackend.services.MovieRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/movierooms")
public class MovieRoomController {
    @Autowired
    private MovieRoomService movieRoomService;

    @GetMapping
    public Page<MovieRoom> getAllMovieRooms(@RequestParam(defaultValue = "0") int pageNumber,
                                            @RequestParam(defaultValue = "10") int size,
                                            @RequestParam(defaultValue = "name") String orderBy) {
        return movieRoomService.findAllMovieRooms(pageNumber, size, orderBy);
    }

    @GetMapping("/{id}")
    public MovieRoom getMovieRoomById(@RequestParam String id) {
        return movieRoomService.findMovieRoomById(id);
    }

    @PostMapping
    public MovieRoom saveMovieRoom(@RequestBody NewMovieRoomDTO payload) {
        return movieRoomService.save(payload);
    }

    @DeleteMapping("/{id}")
    public MovieRoom deleteById(@RequestParam String id) {
        return movieRoomService.deleteMovieRoomById(id);
    }

}

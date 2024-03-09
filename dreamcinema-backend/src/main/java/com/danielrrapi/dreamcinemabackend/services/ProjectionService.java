package com.danielrrapi.dreamcinemabackend.services;

import com.danielrrapi.dreamcinemabackend.entities.*;
import com.danielrrapi.dreamcinemabackend.exceptions.NotFoundExcpetion;
import com.danielrrapi.dreamcinemabackend.payloads.NewProjectionDTO;
import com.danielrrapi.dreamcinemabackend.repositories.ProjectionDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class ProjectionService {
    @Autowired
    private ProjectionDAO projectionDAO;
    @Autowired
    private MovieService movieService;
    @Autowired
    private ScreeningTimeService screeningTimeService;
    @Autowired
    private DayService dayService;
    @Autowired
    private MovieRoomService movieRoomService;

    public Page<Projection> findAllProjections(int pageNumber, int size, String orderBy) {
        if(size > 100) size = 100;
        Pageable pageable = PageRequest.of(pageNumber, size, Sort.by(orderBy));
        return projectionDAO.findAll(pageable);
    }

    public Projection findProjectionById(String id) {
        return projectionDAO.findById(UUID.fromString(id)).orElseThrow(() -> new NotFoundExcpetion("Seat with id: " + id + " not found"));
    }

    public Projection save(NewProjectionDTO payload) {
        Movie movie = movieService.findMovieById(payload.movieId());
        ScreeningTime screeningTime = screeningTimeService.findScreeningTimeById(payload.screeningTimeId());
        Day day = dayService.findDayById(payload.dayId());
        MovieRoom movieRoom = movieRoomService.findMovieRoomById(payload.movieRoomId());
        Projection newProjection = new Projection(movie, day, screeningTime, movieRoom);
        return projectionDAO.save(newProjection);
    }

    public Projection deleteById(String id) {
        Projection found = this.findProjectionById(id);
        projectionDAO.deleteById(UUID.fromString(id));
        return found;
    }
}
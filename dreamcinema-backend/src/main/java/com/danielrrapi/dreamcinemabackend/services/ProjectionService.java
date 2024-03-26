package com.danielrrapi.dreamcinemabackend.services;

import com.danielrrapi.dreamcinemabackend.entities.*;
import com.danielrrapi.dreamcinemabackend.exceptions.NotFoundExcpetion;
import com.danielrrapi.dreamcinemabackend.payloads.ModifiedProjectionDTO;
import com.danielrrapi.dreamcinemabackend.payloads.NewDateDTO;
import com.danielrrapi.dreamcinemabackend.payloads.NewProjectionDTO;
import com.danielrrapi.dreamcinemabackend.payloads.NewScreeningTimeDTO;
import com.danielrrapi.dreamcinemabackend.repositories.ProjectionDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
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

    public Page<Projection> findProjectionsByMovieId(int pageNumber, int size, String orderBy, String id) {
        if(size > 100) size = 100;
        Pageable pageable = PageRequest.of(pageNumber, size, Sort.by(orderBy));
        return projectionDAO.findProjectionsByMovieId(pageable, movieService.findMovieById(id));
    }

    public Page<Projection> findProjectionsByMovieIdAndDay(int pageNumber, int size, String orderBy, String id, int dayOfMonth, int month, int year) {
        if(size > 100) size = 100;
        LocalDate localDate = LocalDate.of(year, month, dayOfMonth);
        Day date = dayService.findDayByDate(localDate);
        Pageable pageable = PageRequest.of(pageNumber, size, Sort.by(orderBy));
        return projectionDAO.findProjectionsByMovieId(pageable, movieService.findMovieById(id));
    }

    public Projection save(NewProjectionDTO payload) {
        Movie movie = movieService.findMovieById(payload.movie());
        ScreeningTime screeningTime = screeningTimeService.save(new NewScreeningTimeDTO(payload.screeningTime()));
        Day day = dayService.save(new NewDateDTO(payload.day()));
        MovieRoom movieRoom = movieRoomService.findMovieRoomById(payload.movieRoom());
        Projection newProjection = new Projection(movie, day, screeningTime, movieRoom);
        return projectionDAO.save(newProjection);
    }

    public Projection saveModifiedProjection(ModifiedProjectionDTO payload) {
        Movie movie = movieService.findMovieById(payload.movie());
        ScreeningTime screeningTime = screeningTimeService.save(new NewScreeningTimeDTO(payload.screeningTime()));
        Day day = dayService.save(new NewDateDTO(payload.day()));
        MovieRoom movieRoom = movieRoomService.findMovieRoomById(payload.movieRoom());
        Projection newProjection = this.findProjectionById(payload.id());
        newProjection.setDay(day);
        newProjection.setMovie(movie);
        newProjection.setMovieRoom(movieRoom);
        newProjection.setScreeningTime(screeningTime);
        return projectionDAO.save(newProjection);
    }

    public Projection deleteById(String id) {
        Projection found = this.findProjectionById(id);
        projectionDAO.deleteById(UUID.fromString(id));
        return found;
    }
}

package com.danielrrapi.dreamcinemabackend.services;

import com.danielrrapi.dreamcinemabackend.entities.Movie;
import com.danielrrapi.dreamcinemabackend.exceptions.NotFoundExcpetion;
import com.danielrrapi.dreamcinemabackend.repositories.MovieDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class MovieService {
    @Autowired
    private MovieDAO movieDAO;

    public Page<Movie> findAllMovies(int pageNumber, int size, String orderBy) {
        if (size > 100) size = 100;
        Pageable pageable = PageRequest.of(pageNumber, size, Sort.by(orderBy));
        return movieDAO.findAll(pageable);
    }

    public Movie findMovieById(String id) {
        return movieDAO.findById(UUID.fromString(id)).orElseThrow(() -> new NotFoundExcpetion("Movie with id: " + id + " not found"));
    }

    public Movie saveMovie(Movie movie) {
        return movieDAO.save(movie);
    }

    public Movie saveModifiedMovie(Movie movie) {
        return movieDAO.save(movie);
    }

    public void deleteMovieById(String id) {
        Movie found = this.findMovieById(id);
        movieDAO.delete(found);
    }


}

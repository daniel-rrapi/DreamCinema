package com.danielrrapi.dreamcinemabackend.repositories;

import com.danielrrapi.dreamcinemabackend.entities.Day;
import com.danielrrapi.dreamcinemabackend.entities.Movie;
import com.danielrrapi.dreamcinemabackend.entities.Projection;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface ProjectionDAO extends JpaRepository<Projection, UUID> {
    @Query("SELECT p FROM Projection p WHERE p.movie = :movieId")
    Page<Projection> findProjectionsByMovieId(Pageable pageable, @Param("movieId") Movie movie);

    @Query("SELECT p FROM Projection p WHERE p.day = :dayId AND p.movie = :movieId")
    Page<Projection> findProjectionsByMovieIdAndDay(Pageable pageable, @Param("movieId") Movie movie, @Param("dayId") Day day);
}

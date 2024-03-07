package com.danielrrapi.dreamcinemabackend.repositories;

import com.danielrrapi.dreamcinemabackend.entities.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface MovieDAO extends JpaRepository<Movie, UUID> {
}

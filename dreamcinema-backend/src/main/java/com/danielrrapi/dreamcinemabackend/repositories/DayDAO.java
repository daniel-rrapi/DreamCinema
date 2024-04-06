package com.danielrrapi.dreamcinemabackend.repositories;

import com.danielrrapi.dreamcinemabackend.entities.Day;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface DayDAO extends JpaRepository<Day, UUID> {
    Optional<Day> findByDate(LocalDate date);
}

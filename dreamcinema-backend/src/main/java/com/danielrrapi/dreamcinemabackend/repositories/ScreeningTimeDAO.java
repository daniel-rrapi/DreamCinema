package com.danielrrapi.dreamcinemabackend.repositories;

import com.danielrrapi.dreamcinemabackend.entities.ScreeningTime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Optional;
import java.util.UUID;
@Repository
public interface ScreeningTimeDAO extends JpaRepository<ScreeningTime, UUID> {
    @Query("SELECT s FROM ScreeningTime s WHERE s.startTime = :date")
    Optional<ScreeningTime> findByStartDate(@Param("date") LocalTime date);
}

package com.danielrrapi.dreamcinemabackend.repositories;

import com.danielrrapi.dreamcinemabackend.entities.Projection;
import com.danielrrapi.dreamcinemabackend.entities.Seat;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.UUID;
@Repository
public interface SeatDAO extends JpaRepository<Seat, UUID> {

    @Query("SELECT s FROM Seat s WHERE s.projection = :projectionId")
    Page<Seat> findSeatsByProjection(Pageable pageable, @Param("projectionId") Projection projectionId);
}

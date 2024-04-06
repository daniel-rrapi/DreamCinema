package com.danielrrapi.dreamcinemabackend.repositories;

import com.danielrrapi.dreamcinemabackend.entities.Ticket;
import com.danielrrapi.dreamcinemabackend.entities.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface TicketDAO extends JpaRepository<Ticket, UUID> {
    @Query("SELECT t FROM Ticket t WHERE t.user = :user")
    Page<Ticket> findTicketsByUser(Pageable pageable, @Param("user") User user);
}

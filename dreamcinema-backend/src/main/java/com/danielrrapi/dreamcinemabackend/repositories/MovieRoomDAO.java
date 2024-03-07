package com.danielrrapi.dreamcinemabackend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface MovieRoomDAO extends JpaRepository<MovieRoomDAO, UUID> {
}

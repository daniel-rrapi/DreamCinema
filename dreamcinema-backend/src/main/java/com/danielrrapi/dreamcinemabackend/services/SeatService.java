package com.danielrrapi.dreamcinemabackend.services;

import com.danielrrapi.dreamcinemabackend.entities.Projection;
import com.danielrrapi.dreamcinemabackend.entities.Seat;
import com.danielrrapi.dreamcinemabackend.exceptions.NotFoundExcpetion;
import com.danielrrapi.dreamcinemabackend.payloads.NewSeatDTO;
import com.danielrrapi.dreamcinemabackend.repositories.SeatDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class SeatService {
    @Autowired
    private SeatDAO seatDAO;
    @Autowired
    private ProjectionService projectionService;

    public Page<Seat> findAllSeats(int pageNumber, int size, String orderBy) {
        if(size > 100) size = 100;
        Pageable pageable = PageRequest.of(pageNumber, size, Sort.by(orderBy));
        return seatDAO.findAll(pageable);
    }

    public Page<Seat> findSeatsByProjectionId(int pageNumber, int size, String orderBy, String projectionId) {
        if (size > 100) size = 100;
        Pageable pageable = PageRequest.of(pageNumber, size, Sort.by(orderBy));
        return seatDAO.findSeatsByProjection(pageable, projectionService.findProjectionById(projectionId));
    }

    public Seat findSeatById(String id) {
        return seatDAO.findById(UUID.fromString(id)).orElseThrow(() -> new NotFoundExcpetion("Seat with id: " + id + " not found"));
    }

    public  Seat save(NewSeatDTO payload) {
        Projection projection = projectionService.findProjectionById(payload.projectionId());
        Seat newSeat = new Seat(payload.number(), payload.isBooked(), projection);
        return seatDAO.save(newSeat);
    }

    public Seat deleteById(String id) {
        Seat found = this.findSeatById(id);
        seatDAO.deleteById(UUID.fromString(id));
        return found;
    }
}

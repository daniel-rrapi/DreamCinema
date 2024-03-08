package com.danielrrapi.dreamcinemabackend.services;

import com.danielrrapi.dreamcinemabackend.entities.Projection;
import com.danielrrapi.dreamcinemabackend.entities.ScreeningTime;
import com.danielrrapi.dreamcinemabackend.entities.Seat;
import com.danielrrapi.dreamcinemabackend.exceptions.NotFoundExcpetion;
import com.danielrrapi.dreamcinemabackend.payloads.NewSeatDTO;
import com.danielrrapi.dreamcinemabackend.repositories.ScreeningTimeDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.util.UUID;

public class ScreeningTimeService {
    @Autowired
    private ScreeningTimeDAO screeningTimeDAO;

    public Page<ScreeningTime> findAllScreeningTime(int pageNumber, int size, String orderBy) {
        if(size > 100) size = 100;
        Pageable pageable = PageRequest.of(pageNumber, size, Sort.by(orderBy));
        return screeningTimeDAO.findAll(pageable);
    }

    public ScreeningTime findScreeningTimeById(String id) {
        return screeningTimeDAO.findById(UUID.fromString(id)).orElseThrow(() -> new NotFoundExcpetion("ScreeningTime with id: " + id + " not found"));
    }

    public  ScreeningTime save(ScreeningTime screeningTime) {
        return screeningTimeDAO.save(screeningTime);
    }

    public ScreeningTime deleteById(String id) {
        ScreeningTime found = this.findScreeningTimeById(id);
        screeningTimeDAO.deleteById(UUID.fromString(id));
        return found;
    }
}

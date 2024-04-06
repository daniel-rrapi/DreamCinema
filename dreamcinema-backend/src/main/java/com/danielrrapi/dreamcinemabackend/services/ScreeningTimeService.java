package com.danielrrapi.dreamcinemabackend.services;

import com.danielrrapi.dreamcinemabackend.entities.Projection;
import com.danielrrapi.dreamcinemabackend.entities.ScreeningTime;
import com.danielrrapi.dreamcinemabackend.entities.Seat;
import com.danielrrapi.dreamcinemabackend.exceptions.NotFoundExcpetion;
import com.danielrrapi.dreamcinemabackend.payloads.NewScreeningTimeDTO;
import com.danielrrapi.dreamcinemabackend.payloads.NewSeatDTO;
import com.danielrrapi.dreamcinemabackend.repositories.ScreeningTimeDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.core.Local;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Optional;
import java.util.UUID;

@Service
public class ScreeningTimeService {
    @Autowired
    private ScreeningTimeDAO screeningTimeDAO;

    public Page<ScreeningTime> findAllScreeningTime(int pageNumber, int size, String orderBy) {
        if (size > 100) size = 100;
        Pageable pageable = PageRequest.of(pageNumber, size, Sort.by(orderBy));
        return screeningTimeDAO.findAll(pageable);
    }

    public ScreeningTime findScreeningTimeById(String id) {
        return screeningTimeDAO.findById(UUID.fromString(id)).orElseThrow(() -> new NotFoundExcpetion("ScreeningTime with id: " + id + " not found"));
    }

    public ScreeningTime findScreeningTimeByLocalTime(NewScreeningTimeDTO payload) {
        return screeningTimeDAO.findByStartDate(payload.startTime()).orElse(null);
    }

    public ScreeningTime save(NewScreeningTimeDTO payload) {
        ScreeningTime found = this.findScreeningTimeByLocalTime(payload);
        if (found == null) {
            return screeningTimeDAO.save(new ScreeningTime(payload.startTime()));
        } else {
            return found;
        }

    }

    public ScreeningTime deleteById(String id) {
        ScreeningTime found = this.findScreeningTimeById(id);
        screeningTimeDAO.deleteById(UUID.fromString(id));
        return found;
    }
}

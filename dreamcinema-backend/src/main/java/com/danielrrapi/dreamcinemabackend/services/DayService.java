package com.danielrrapi.dreamcinemabackend.services;

import com.danielrrapi.dreamcinemabackend.entities.Day;
import com.danielrrapi.dreamcinemabackend.exceptions.BadRequestException;
import com.danielrrapi.dreamcinemabackend.exceptions.NotFoundExcpetion;
import com.danielrrapi.dreamcinemabackend.payloads.NewDateDTO;
import com.danielrrapi.dreamcinemabackend.repositories.DayDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.UUID;

@Service
public class DayService {
    @Autowired
    private DayDAO dayDAO;

    public Page<Day> getAllDays(int pageNumber, int size, String orderBy) {
        if (size > 100) size = 100;
        Pageable pageable = PageRequest.of(pageNumber, size, Sort.by(orderBy));
        return dayDAO.findAll(pageable);
    }

    public Day findDayById(String id) {
        return dayDAO.findById(UUID.fromString(id)).orElseThrow(() -> new NotFoundExcpetion("Date with id: " + id + " not found"));
    }

    public Day findDayByDate(LocalDate date) {
        return dayDAO.findByDate(date).orElseThrow(() -> new NotFoundExcpetion("Date: " + date + " not found"));
    }

    public Day save(NewDateDTO payload) {
        dayDAO.findByDate(payload.date()).ifPresent(day -> {
            throw new BadRequestException("Day: " + day + " already exist");
        });
        return dayDAO.save(new Day(payload.date()));
    }

    public Day deleteById(String id) {
        Day found = this.findDayById(id);
        dayDAO.delete(found);
        return found;
    }

}

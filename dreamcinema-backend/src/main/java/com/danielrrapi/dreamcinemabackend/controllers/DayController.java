package com.danielrrapi.dreamcinemabackend.controllers;

import com.danielrrapi.dreamcinemabackend.entities.Day;
import com.danielrrapi.dreamcinemabackend.payloads.NewDateDTO;
import com.danielrrapi.dreamcinemabackend.services.DayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(name = "/days")
public class DayController {
    @Autowired
    private DayService dayService;

    @GetMapping
    public Page<Day> getAllDays(@RequestParam(defaultValue = "0") int pageNumber,
                                @RequestParam(defaultValue = "10") int size,
                                @RequestParam(defaultValue = "day") String orderBy) {
        return dayService.getAllDays(pageNumber, size, orderBy);
    }

    @GetMapping("/{id}")
    public Day getDayById(@RequestParam String id) {
        return dayService.findDayById(id);
    }

    @PostMapping
    public Day saveDay(@RequestBody NewDateDTO payload) {
        return dayService.save(payload);
    }

    @DeleteMapping("/{id}")
    public Day removeDayById(@RequestParam String id) {
        return  dayService.deleteById(id);
    }

}

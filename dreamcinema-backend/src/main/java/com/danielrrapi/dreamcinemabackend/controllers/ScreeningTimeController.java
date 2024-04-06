package com.danielrrapi.dreamcinemabackend.controllers;

import com.danielrrapi.dreamcinemabackend.entities.ScreeningTime;
import com.danielrrapi.dreamcinemabackend.entities.Seat;
import com.danielrrapi.dreamcinemabackend.payloads.NewScreeningTimeDTO;
import com.danielrrapi.dreamcinemabackend.payloads.NewSeatDTO;
import com.danielrrapi.dreamcinemabackend.services.ScreeningTimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/screeningtimes")
public class ScreeningTimeController {
    @Autowired
    private ScreeningTimeService screeningTimeService;

    @GetMapping
    public Page<ScreeningTime> getAllScreeningTimes(@RequestParam(defaultValue = "0") int pageNumber,
                                          @RequestParam(defaultValue = "10") int size,
                                          @RequestParam(defaultValue = "day") String orderBy) {
        return screeningTimeService.findAllScreeningTime(pageNumber, size, orderBy);
    }

    @GetMapping("/{id}")
    public ScreeningTime getScreeningTimeById(@PathVariable String id) {
        return screeningTimeService.findScreeningTimeById(id);
    }

    @PostMapping
    public ScreeningTime saveScreeningTime(@RequestBody NewScreeningTimeDTO payload) {
        return screeningTimeService.save(payload);
    }

    @DeleteMapping("/{id}")
    public ScreeningTime removeScreeningTimeById(@PathVariable String id) {
        return  screeningTimeService.deleteById(id);
    }
}

package com.danielrrapi.dreamcinemabackend.controllers;

import com.danielrrapi.dreamcinemabackend.entities.Seat;
import com.danielrrapi.dreamcinemabackend.payloads.NewSeatDTO;
import com.danielrrapi.dreamcinemabackend.services.SeatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/seats")
public class SeatController {
    @Autowired
    private SeatService seatService;

    @GetMapping
    public Page<Seat> getAllDays(@RequestParam(defaultValue = "0") int pageNumber,
                                @RequestParam(defaultValue = "10") int size,
                                @RequestParam(defaultValue = "number") String orderBy) {
        return seatService.findAllSeats(pageNumber, size, orderBy);
    }

    @GetMapping("/projections/{id}")
    public Page<Seat> getSeatsByProjectionId(@RequestParam(defaultValue = "0") int pageNumber,
                                             @RequestParam(defaultValue = "50") int size,
                                             @RequestParam(defaultValue = "number") String orderBy,
                                             @PathVariable String id) {
        return seatService.findSeatsByProjectionId(pageNumber, size, orderBy, id);
    }

//    @GetMapping("/{id}")
//    public Seat getSeatById(@PathVariable String id) {
//        return seatService.findSeatById(id);
//    }


    @PostMapping
    public Seat saveSeat(@RequestBody NewSeatDTO payload) {
        return seatService.save(payload);
    }

    @DeleteMapping("/{id}")
    public Seat removeSeatById(@RequestParam String id) {
        return  seatService.deleteById(id);
    }
}

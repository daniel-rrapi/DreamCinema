package com.danielrrapi.dreamcinemabackend;

import com.danielrrapi.dreamcinemabackend.controllers.SeatController;
import com.danielrrapi.dreamcinemabackend.entities.Seat;
import com.danielrrapi.dreamcinemabackend.payloads.NewSeatDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class SeatsRunner implements CommandLineRunner {
    @Autowired
    private SeatController seatController;

    final String projectionId = "1e7a682f-c969-420e-a21c-d29c183587a7";

    @Override
    public void run(String... args) throws Exception {
//        for(int i = 0; i < 40; i++) {
//
//            seatController.saveSeat(new NewSeatDTO(i, false, projectionId));
//        }

    }
}

package com.danielrrapi.dreamcinemabackend.services;

import com.danielrrapi.dreamcinemabackend.repositories.TicketDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TicketService {
    @Autowired
    private TicketDAO bookingDAO;
}

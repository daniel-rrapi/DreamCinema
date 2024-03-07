package com.danielrrapi.dreamcinemabackend.services;

import com.danielrrapi.dreamcinemabackend.repositories.BookingDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookingService {
    @Autowired
    private BookingDAO bookingDAO;
}

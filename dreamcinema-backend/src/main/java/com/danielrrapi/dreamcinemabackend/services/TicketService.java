package com.danielrrapi.dreamcinemabackend.services;

import com.danielrrapi.dreamcinemabackend.entities.Ticket;
import com.danielrrapi.dreamcinemabackend.exceptions.NotFoundExcpetion;
import com.danielrrapi.dreamcinemabackend.repositories.TicketDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class TicketService {
    @Autowired
    private TicketDAO ticketDAO;

    public Page<Ticket> getAllTickets(int pageNumber, int size, String orderBy) {
        if (size > 100) size = 100;
        Pageable pageable = PageRequest.of(pageNumber, size, Sort.by(orderBy));
        return ticketDAO.findAll(pageable);
    }

    public Ticket findTicketById(String id) {
        return ticketDAO.findById(UUID.fromString(id)).orElseThrow(() -> new NotFoundExcpetion("Date with id: " + id + " not found"));
    }


    public Ticket save(Ticket ticket) {
        return ticketDAO.save(ticket);
    }

    public Ticket deleteById(String id) {
        Ticket found = this.findTicketById(id);
        ticketDAO.delete(found);
        return found;
    }
}

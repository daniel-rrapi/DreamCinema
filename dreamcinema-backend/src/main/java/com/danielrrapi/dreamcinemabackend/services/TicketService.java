package com.danielrrapi.dreamcinemabackend.services;

import com.danielrrapi.dreamcinemabackend.entities.Seat;
import com.danielrrapi.dreamcinemabackend.entities.Ticket;
import com.danielrrapi.dreamcinemabackend.exceptions.NotFoundExcpetion;
import com.danielrrapi.dreamcinemabackend.payloads.NewTicketDTO;
import com.danielrrapi.dreamcinemabackend.repositories.TicketDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.UUID;

@Service
public class TicketService {
    @Autowired
    private TicketDAO ticketDAO;

    @Autowired
    private UserService userService;

    @Autowired
    private ProjectionService projectionService;

    @Autowired
    private SeatService seatService;

    public Page<Ticket> getAllTickets(int pageNumber, int size, String orderBy) {
        if (size > 100) size = 100;
        Pageable pageable = PageRequest.of(pageNumber, size, Sort.by(orderBy));
        return ticketDAO.findAll(pageable);
    }

    public Ticket findTicketById(String id) {
        return ticketDAO.findById(UUID.fromString(id)).orElseThrow(() -> new NotFoundExcpetion("Date with id: " + id + " not found"));
    }




    public Ticket save(NewTicketDTO payload) {
        seatService.setBookedToTrue(payload.seat());
        Ticket newTicket = new Ticket(userService.findById(UUID.fromString(payload.user())), projectionService.findProjectionById(payload.projection()), seatService.findSeatById(payload.seat()));
        return ticketDAO.save(newTicket);
    }

    public Ticket deleteById(String id) {
        Ticket found = this.findTicketById(id);
        ticketDAO.delete(found);
        return found;
    }
}

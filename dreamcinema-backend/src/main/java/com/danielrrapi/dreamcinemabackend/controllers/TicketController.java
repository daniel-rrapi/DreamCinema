package com.danielrrapi.dreamcinemabackend.controllers;

import com.danielrrapi.dreamcinemabackend.entities.Ticket;
import com.danielrrapi.dreamcinemabackend.entities.User;
import com.danielrrapi.dreamcinemabackend.payloads.NewTicketDTO;
import com.danielrrapi.dreamcinemabackend.services.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/tickets")
public class TicketController {
    @Autowired
    private TicketService ticketService;

    @GetMapping
    public Page<Ticket> getAllTicket(@RequestParam(defaultValue = "0") int pageNumber,
                                     @RequestParam(defaultValue = "10") int size,
                                     @RequestParam(defaultValue = "id") String orderBy) {
        return ticketService.getAllTickets(pageNumber, size, orderBy);
    }
    @GetMapping("/user")
    public Page<Ticket> getAllTicketsByUser(@RequestParam(defaultValue = "0") int pageNumber, @RequestParam(defaultValue = "10") int size, @RequestParam(defaultValue = "id") String orderBy, @AuthenticationPrincipal User currentAuthenticatedUser) {
        return ticketService.findAllTicketsByUser(pageNumber, size, orderBy, currentAuthenticatedUser);
    }

    @GetMapping("/{id}")
    public Ticket getTicketById(String id) {
        return ticketService.findTicketById(id);
    }

    @PostMapping
    public Ticket save(@RequestBody NewTicketDTO payload) {
        return ticketService.save(payload);
    }

    @DeleteMapping("/{id}")
    public Ticket deleteById(@RequestParam String id) {
        return ticketService.deleteById(id);
    }
}

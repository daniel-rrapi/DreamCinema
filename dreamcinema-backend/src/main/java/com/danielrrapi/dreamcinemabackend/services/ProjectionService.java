package com.danielrrapi.dreamcinemabackend.services;

import com.danielrrapi.dreamcinemabackend.entities.Projection;
import com.danielrrapi.dreamcinemabackend.exceptions.NotFoundExcpetion;
import com.danielrrapi.dreamcinemabackend.repositories.ProjectionDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class ProjectionService {
    @Autowired
    private ProjectionDAO projectionDAO;

    public Page<Projection> findAllProjections(int pageNumber, int size, String orderBy) {
        if(size > 100) size = 100;
        Pageable pageable = PageRequest.of(pageNumber, size, Sort.by(orderBy));
        return projectionDAO.findAll(pageable);
    }

    public Projection findProjectionById(String id) {
        return projectionDAO.findById(UUID.fromString(id)).orElseThrow(() -> new NotFoundExcpetion("Seat with id: " + id + " not found"));
    }
}

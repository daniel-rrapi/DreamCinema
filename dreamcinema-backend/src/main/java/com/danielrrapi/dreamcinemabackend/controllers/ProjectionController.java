package com.danielrrapi.dreamcinemabackend.controllers;

import com.danielrrapi.dreamcinemabackend.entities.Movie;
import com.danielrrapi.dreamcinemabackend.entities.Projection;
import com.danielrrapi.dreamcinemabackend.payloads.NewProjectionDTO;
import com.danielrrapi.dreamcinemabackend.services.ProjectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/projections")
public class ProjectionController {
    @Autowired
    private ProjectionService projectionService;

    @GetMapping()
    public Page<Projection> getAllProjections(@RequestParam(defaultValue = "0") int pageNumber,
                                              @RequestParam(defaultValue = "10") int size,
                                              @RequestParam(defaultValue = "id") String orderBy) {
        return projectionService.findAllProjections(pageNumber, size, orderBy);
    }

    @GetMapping("/{id}")
    public Projection getProjectionById(@PathVariable String id) {
        return projectionService.findProjectionById(id);
    }

    @GetMapping("/movies/{id}")
    public Page<Projection> getProjectionsByMovieId(@RequestParam(defaultValue = "0") int pageNumber,
                                     @RequestParam(defaultValue = "10") int size,
                                     @RequestParam(defaultValue = "id") String orderBy,
                                     @PathVariable String id) {
return projectionService.findProjectionsByMovieId(pageNumber, size, orderBy, id);
    }

    @PostMapping
    public Projection save(@RequestBody NewProjectionDTO payload) {
        return projectionService.save(payload);
    }
}

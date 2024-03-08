package com.danielrrapi.dreamcinemabackend.entities;

import com.danielrrapi.dreamcinemabackend.enums.MovieGenre;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalTime;
import java.util.List;
import java.util.UUID;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "movies")
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String title;

    private String description;

    private int year;

    private String county;

    private LocalTime duration;

    @Column(name = "poster_url")
    private String posterUrl;

    @Column(name = "banner_url")
    private String bannerUrl;

    @Enumerated(EnumType.STRING)
    private List<MovieGenre> genres;


    public Movie(String title, String description, int year, String county,  String posterUrl, String bannerUrl) {
        this.title = title;
        this.description = description;
        this.year = year;
        this.county = county;
        this.duration = null;
        this.posterUrl = posterUrl;
        this.bannerUrl = bannerUrl;
        this.genres = genres;
    }
}

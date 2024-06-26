import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies-landingpage',
  templateUrl: './movies-landingpage.component.html',
  styleUrls: ['./movies-landingpage.component.scss'],
})
export class MoviesLandingpageComponent implements OnInit {
  constructor(private movieSrv: MovieService) {}
  movies: Movie[] = [];
  index: any;
  ngOnInit(): void {
    this.movieSrv.getMovies(4).subscribe((data) => {
      this.movies = data.content;
      console.log(data);
    });
  }
}

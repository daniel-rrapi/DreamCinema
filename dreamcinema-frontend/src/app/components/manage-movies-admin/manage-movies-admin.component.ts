import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Movie, MoviePaged } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-manage-movies-admin',
  templateUrl: './manage-movies-admin.component.html',
  styleUrls: ['./manage-movies-admin.component.scss'],
})
export class ManageMoviesAdminComponent implements OnInit {
  movies!: MoviePaged;
  isModifyMode = false;
  currentMovie!: Movie;
  form!: FormGroup;

  constructor(private movieSrv: MovieService) {
    movieSrv.getMovies(10).subscribe((res) => (this.movies = res));
  }

  ngOnInit(): void {}

  setCurrentMovie(movie: Movie) {
    this.currentMovie = movie;
    this.isModifyMode = true;
  }
}

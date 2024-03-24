import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  isCreatingMode = false;
  currentMovie: Movie | null = null;
  form!: FormGroup;

  constructor(private movieSrv: MovieService) {
    movieSrv.getMovies(10).subscribe((res) => (this.movies = res));
  }

  ngOnInit(): void {}

  setCurrentMovie(movie: Movie) {
    this.currentMovie = movie;
    this.isModifyMode = true;
    this.openModifyWindow();
  }

  openModifyWindow() {
    if (this.currentMovie) {
      this.form = new FormGroup({
        title: new FormControl(this.currentMovie.title),
        description: new FormControl(this.currentMovie.description),
        year: new FormControl(this.currentMovie.year),
        country: new FormControl(this.currentMovie.country),
        duration: new FormControl(this.currentMovie.duration),
        posterUrl: new FormControl(this.currentMovie.posterUrl),
        bannerUrl: new FormControl(this.currentMovie.bannerUrl),
        genres: new FormControl(this.currentMovie.genres),
      });
    }
  }

  openCreateWindow() {
    this.currentMovie = null;
    this.isCreatingMode = true;

    this.form = new FormGroup({
      title: new FormControl(),
      description: new FormControl(),
      year: new FormControl(),
      country: new FormControl(),
      duration: new FormControl(),
      posterUrl: new FormControl(),
      bannerUrl: new FormControl(),
      genres: new FormControl(),
    });
  }

  closeWindow() {
    this.isCreatingMode = false;
    this.isModifyMode = false;
    this.currentMovie = null;
  }

  deleteCurrentMovie() {
    let id = this.currentMovie?.id;
    this.movieSrv.deleteMovie(id!).subscribe();
    this.closeWindow();
  }

  formSubmit() {
    if (this.isCreatingMode) {
      let newMovie: Movie = {
        id: '',
        title: this.form.get('title')?.value,
        description: this.form.get('description')?.value,
        year: this.form.get('year')?.value,
        country: this.form.get('country')?.value,
        duration: this.form.get('duration')?.value,
        posterUrl: this.form.get('posterUrl')?.value,
        bannerUrl: this.form.get('bannerUrl')?.value,
        genres: this.form.get('genres')?.value,
      };
      this.movieSrv.saveMovie(newMovie).subscribe();
      this.closeWindow();
    } else if (this.isModifyMode || this.currentMovie) {
      let modifiedMovie: Movie = {
        id: this.currentMovie!.id,
        title: this.form.get('title')?.value,
        description: this.form.get('description')?.value,
        year: this.form.get('year')?.value,
        country: this.form.get('country')?.value,
        duration: this.form.get('duration')?.value,
        posterUrl: this.form.get('posterUrl')?.value,
        bannerUrl: this.form.get('bannerUrl')?.value,
        genres: this.form.get('genres')?.value,
      };

      this.movieSrv.modifyMovie(modifiedMovie).subscribe();
      this.closeWindow();
    }
  }
}

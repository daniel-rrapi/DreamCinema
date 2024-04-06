import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Movie, MoviePaged } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-manage-movies-admin',
  templateUrl: './manage-movies-admin.component.html',
  styleUrls: ['./manage-movies-admin.component.scss'],
})
export class ManageMoviesAdminComponent implements OnInit, OnDestroy {
  movies!: MoviePaged;
  isModifyMode = false;
  isCreatingMode = false;
  currentMovie: Movie | null = null;
  form!: FormGroup;

  constructor(private movieSrv: MovieService, private popupSrv: PopupService) {
    movieSrv.getMovies(10).subscribe((res) => (this.movies = res));
  }
  ngOnDestroy(): void {
    this.popupSrv.setPopupState(false);
  }

  ngOnInit(): void {}

  setCurrentMovie(movie: Movie) {
    this.currentMovie = movie;
    this.isModifyMode = true;
    this.openModifyWindow();
  }

  openModifyWindow() {
    this.popupSrv.setPopupState(true);
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
    this.popupSrv.setPopupState(true);
    this.currentMovie = null;
    this.isCreatingMode = true;

    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      year: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
      posterUrl: new FormControl('', Validators.required),
      bannerUrl: new FormControl('', Validators.required),
      genres: new FormControl('', Validators.required),
    });
  }

  closeWindow() {
    this.popupSrv.setPopupState(false);
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

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MoviePaged } from 'src/app/interfaces/movie';
import { MovieRoomPaged } from 'src/app/interfaces/movie-room';
import { Projection, ProjectionPaged } from 'src/app/interfaces/projection';
import { MovieRoomService } from 'src/app/services/movie-room.service';
import { MovieService } from 'src/app/services/movie.service';
import { PopupService } from 'src/app/services/popup.service';
import { ProjectionService } from 'src/app/services/projection.service';

@Component({
  selector: 'app-manage-projections-admin',
  templateUrl: './manage-projections-admin.component.html',
  styleUrls: ['./manage-projections-admin.component.scss'],
})
export class ManageProjectionsAdminComponent implements OnInit, OnDestroy {
  projections!: ProjectionPaged;
  movies!: MoviePaged;
  movieRooms!: MovieRoomPaged;
  isModifyMode = false;
  isCreatingMode = false;
  currentProjection: Projection | null = null;
  form!: FormGroup;

  constructor(
    private projectionSrv: ProjectionService,
    private movieSrv: MovieService,
    private movieRoomSrv: MovieRoomService,
    private popupSrv: PopupService
  ) {
    projectionSrv.getProjections().subscribe((res) => (this.projections = res));
    movieSrv.getMovies(100).subscribe((res) => (this.movies = res));
    movieRoomSrv.getMovieRooms().subscribe((res) => (this.movieRooms = res));
  }
  ngOnDestroy(): void {
    this.popupSrv.setPopupState(false);
  }

  ngOnInit(): void {}

  setCurrentProjection(projection: Projection) {
    this.currentProjection = projection;
    this.isModifyMode = true;
    this.openModifyWindow();
  }

  openModifyWindow() {
    this.popupSrv.setPopupState(true);
    if (this.currentProjection) {
      this.form = new FormGroup({
        movie: new FormControl(this.currentProjection.movie.id),
        day: new FormControl(this.currentProjection.day.date),
        screeningTime: new FormControl(
          this.currentProjection.screeningTime.startTime.slice(0, -3)
        ),
        movieRoom: new FormControl(this.currentProjection.movieRoom.id),
      });
    }
  }

  openCreateWindow() {
    this.popupSrv.setPopupState(true);
    this.currentProjection = null;
    this.isCreatingMode = true;

    this.form = new FormGroup({
      movie: new FormControl('', Validators.required),
      day: new FormControl('', Validators.required),
      screeningTime: new FormControl('', Validators.required),
      movieRoom: new FormControl('', Validators.required),
    });
  }

  closeWindow() {
    this.popupSrv.setPopupState(false);
    this.isCreatingMode = false;
    this.isModifyMode = false;
    this.currentProjection = null;
  }

  deleteCurrentProjection() {
    this.projectionSrv.delete(this.currentProjection?.id!).subscribe();
    this.closeWindow();
  }

  formSubmit() {
    if (this.isCreatingMode) {
      console.log(this.form);
      let newProjection: Projection = {
        id: '',
        movie: this.form.get('movie')?.value,
        day: this.form.get('day')?.value,
        screeningTime: this.form.get('screeningTime')?.value,
        movieRoom: this.form.get('movieRoom')?.value,
      };
      this.projectionSrv.saveProjection(newProjection).subscribe();
      this.closeWindow();
    } else if (this.isModifyMode || this.currentProjection) {
      console.log(this.form);
      let modifiedProjection: Projection = {
        id: this.currentProjection?.id!,
        movie: this.form.get('movie')?.value,
        day: this.form.get('day')?.value,
        screeningTime: this.form.get('screeningTime')?.value,
        movieRoom: this.form.get('movieRoom')?.value,
      };
      this.projectionSrv
        .updateModifiedProjection(modifiedProjection)
        .subscribe();
      this.closeWindow();
    }
  }
}

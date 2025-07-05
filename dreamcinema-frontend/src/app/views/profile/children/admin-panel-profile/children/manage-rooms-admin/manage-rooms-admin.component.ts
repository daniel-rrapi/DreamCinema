import { Component, OnInit } from '@angular/core';
import { MovieRoomPaged } from 'src/app/interfaces/movie-room';
import { MovieRoomService } from 'src/app/services/movie-room.service';
import { PopupService } from 'src/app/services/popup.service';

@Component({
    selector: 'app-manage-rooms-admin',
    templateUrl: './manage-rooms-admin.component.html',
    styleUrls: ['./manage-rooms-admin.component.scss'],
    standalone: false
})
export class ManageRoomsAdminComponent implements OnInit {
  isModifyMode = false;
  isCreatingMode = false;
  movieRooms: MovieRoomPaged | null = null;

  constructor(
    private popUpSrv: PopupService,
    private movieRoomSrv: MovieRoomService
  ) {}

  ngOnInit(): void {
    this.movieRoomSrv
      .getMovieRooms()
      .subscribe((res) => (this.movieRooms = res));
  }

  openCreateWindows() {
    this.popUpSrv.setPopupState(true);
    this.isCreatingMode = true;
  }
}

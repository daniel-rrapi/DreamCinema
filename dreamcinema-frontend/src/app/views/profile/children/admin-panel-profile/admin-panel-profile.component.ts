import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-admin-panel-profile',
    templateUrl: './admin-panel-profile.component.html',
    styleUrls: ['./admin-panel-profile.component.scss'],
    standalone: false
})
export class AdminPanelProfileComponent implements OnInit {
  isManageMovies = true;
  isManageProjections = false;
  isManageRooms = false;
  constructor() {}

  ngOnInit(): void {}
  manage(str: string) {
    switch (str) {
      case 'movies': {
        this.isManageMovies = true;
        this.isManageProjections = false;
        this.isManageRooms = false;
        break;
      }
      case 'projections': {
        this.isManageMovies = false;
        this.isManageProjections = true;
        this.isManageRooms = false;
        break;
      }
      case 'rooms': {
        this.isManageMovies = false;
        this.isManageProjections = false;
        this.isManageRooms = true;
        break;
      }
    }
  }
}

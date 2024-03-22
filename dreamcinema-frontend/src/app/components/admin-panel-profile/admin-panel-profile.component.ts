import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-panel-profile',
  templateUrl: './admin-panel-profile.component.html',
  styleUrls: ['./admin-panel-profile.component.scss'],
})
export class AdminPanelProfileComponent implements OnInit {
  isManageMovies = true;
  isManageProjections = false;
  constructor() {}

  ngOnInit(): void {}
  manage(str: string) {
    switch (str) {
      case 'movies': {
        this.isManageMovies = true;
        this.isManageProjections = false;
        break;
      }
      case 'projections': {
        this.isManageMovies = false;
        this.isManageProjections = true;
        break;
      }
    }
  }
}

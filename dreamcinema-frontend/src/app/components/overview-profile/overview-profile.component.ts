import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { UserData } from 'src/app/interfaces/user-data';

@Component({
  selector: 'app-overview-profile',
  templateUrl: './overview-profile.component.html',
  styleUrls: ['./overview-profile.component.scss'],
})
export class OverviewProfileComponent implements OnInit {
  user!: UserData | null;
  constructor(private authSrv: AuthService) {
    authSrv.user$.subscribe((res) => (this.user = res));
  }

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { UserData } from 'src/app/interfaces/user-data';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  user!: UserData | null;
  constructor(private authSrv: AuthService) {
    authSrv.restore();
    authSrv.user$.subscribe((res) => (this.user = res));
  }

  ngOnInit(): void {}
  logout() {
    this.authSrv.logout();
  }
}

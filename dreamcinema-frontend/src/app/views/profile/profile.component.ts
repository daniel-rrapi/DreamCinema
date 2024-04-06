import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { UserData } from 'src/app/interfaces/user-data';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user!: UserData | null;
  isProfile = true;
  isTickets = false;
  isAdmin = false;
  isPopup!: boolean;
  constructor(private authSrv: AuthService, private popupSrv: PopupService) {
    authSrv.restore();
    authSrv.user$.subscribe((res) => (this.user = res));
    popupSrv.isPopup$.subscribe((res) => (this.isPopup = res));
  }

  ngOnInit(): void {}

  changePage(page: string) {
    if (page === 'profile') {
      this.isProfile = true;
      this.isTickets = false;
      this.isAdmin = false;
    } else if (page === 'tickets') {
      this.isProfile = false;
      this.isTickets = true;
      this.isAdmin = false;
    } else if (page === 'admin') {
      this.isProfile = false;
      this.isTickets = false;
      this.isAdmin = true;
    }
  }
}

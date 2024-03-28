import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { UserData } from 'src/app/interfaces/user-data';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  user!: UserData | null;
  isScrolled = false;
  constructor(private authSrv: AuthService, private router: Router) {
    authSrv.restore();
    authSrv.user$.subscribe((res) => (this.user = res));
  }

  ngOnInit(): void {}

  logout() {
    this.authSrv.logout();
  }

  isActive(path: string): boolean {
    return this.router.url === path;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    this.isScrolled = offset > 1;
  }
}

import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserData } from '../interfaces/user-data';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  user!: UserData | null;
  constructor(private authSrv: AuthService) {
    authSrv.restore();
    authSrv.user$.subscribe((res) => (this.user = res));
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.user?.roleType === 'ADMIN') {
      return true;
    } else {
      return false;
    }
  }
}

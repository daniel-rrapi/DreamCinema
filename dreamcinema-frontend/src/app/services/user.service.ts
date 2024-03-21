import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ModifiedUser } from '../interfaces/modified-user';
import { UserData } from '../interfaces/user-data';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = environment.apiUrl;
  private currentUser!: UserData | null;
  constructor(private http: HttpClient, private authSrv: AuthService) {
    authSrv.user$.subscribe((res) => (this.currentUser = res));
  }

  modifyUser(userObj: ModifiedUser, userId: string) {
    return this.http.put<UserData>(`${this.apiUrl}/users/${userId}`, userObj);
  }
}

import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, catchError, map, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserData } from '../interfaces/user-data';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { NewUser } from '../interfaces/new-user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  jwtHelper = new JwtHelperService();
  private apiUrl = environment.apiUrl;
  private authSubj = new BehaviorSubject<null | UserData>(null);
  user$ = this.authSubj.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  register(data: NewUser) {
    return this.http.post(`${this.apiUrl}/auth/register`, data).pipe(
      tap(() => {
        this.router.navigate(['/login']);
      }),
      catchError(this.handleError)
    );
  }

  getAuthenticatedUser() {
    return this.http.get<UserData>(`${this.apiUrl}/users/me`).pipe(
      map((res) => {
        this.authSubj.next(res);
      })
    );
  }

  login(data: { email: string; password: string }) {
    return this.http.post<string>(`${this.apiUrl}/auth/login`, data).pipe(
      tap((res) => {
        localStorage.setItem('token', res);
        this.getAuthenticatedUser().subscribe();
      })
    );
  }

  logout() {
    this.authSubj.next(null);
    localStorage.removeItem('token');
    location.reload();
  }

  restore() {
    const token = localStorage.getItem('token');

    if (!this.authSubj.value) {
      this.getAuthenticatedUser().subscribe();
    }

    if (this.jwtHelper.isTokenExpired(token)) {
      this.router.navigate(['/login']);
      return;
    }
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occured: ', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again');
  }
}

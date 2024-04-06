import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MovieRoomPaged } from '../interfaces/movie-room';

@Injectable({
  providedIn: 'root',
})
export class MovieRoomService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getMovieRooms(pageNumber = 0, size = 10, orderBy = 'name') {
    return this.http.get<MovieRoomPaged>(
      `${this.apiUrl}/movierooms?pageNumber=${pageNumber}&size=${size}&orderBy=${orderBy}`
    );
  }
}

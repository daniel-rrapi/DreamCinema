import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieResponse } from '../interfaces/movie-response';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  pageNum: number = 0;

  constructor(private http: HttpClient) {}
  getFirstMovie() {
    return this.http.get<MovieResponse>('http://localhost:8080/movies');
  }
}

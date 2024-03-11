import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContentMovie, MovieResponse } from '../interfaces/movie-response';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  pageNum: number = 0;

  constructor(private http: HttpClient) {}
  getMovies(size: number = 10) {
    return this.http.get<MovieResponse>(
      'http://localhost:8080/movies?size=' + size
    );
  }
  getMovieById(id: string) {
    return this.http.get<ContentMovie>('http://localhost:8080/movies/' + id);
  }
}

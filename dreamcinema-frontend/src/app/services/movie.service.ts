import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MoviePaged } from '../interfaces/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  pageNum: number = 0;

  constructor(private http: HttpClient) {}
  getMovies(size: number = 10) {
    return this.http.get<MoviePaged>(
      'http://localhost:8080/movies?size=' + size
    );
  }
  getMovieById(id: string | null) {
    return this.http.get<Movie>('http://localhost:8080/movies/' + id);
  }
}

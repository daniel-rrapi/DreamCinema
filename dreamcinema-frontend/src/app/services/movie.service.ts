import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MoviePaged } from '../interfaces/movie';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  pageNum: number = 0;
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getMovies(size: number = 10) {
    return this.http.get<MoviePaged>(this.apiUrl + '/movies?size=' + size);
  }

  getMovieById(id: string | null) {
    return this.http.get<Movie>(this.apiUrl + '/movies/' + id);
  }

  saveMovie(movie?: Movie) {
    return this.http.post<Movie>(`${this.apiUrl}/movies`, movie);
  }

  modifyMovie(movie: Movie) {
    return this.http.put<Movie>(`${this.apiUrl}/movies`, movie);
  }

  deleteMovie(id: string) {
    return this.http.delete(`${this.apiUrl}/movies/${id}`);
  }
}

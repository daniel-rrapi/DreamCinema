import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectionPaged } from '../interfaces/projection';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProjectionService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}
  getProjectionsByMovieIdAndDay(
    day: number,
    month: number,
    year: number,
    movieId: string
  ) {
    return this.http.get<ProjectionPaged>(
      this.apiUrl +
        '/projections/movies/days/' +
        movieId +
        '?day=' +
        day +
        '&month=' +
        month +
        '&year=' +
        year
    );
  }
}

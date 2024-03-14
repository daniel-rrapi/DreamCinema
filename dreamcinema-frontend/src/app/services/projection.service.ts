import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Projection, ProjectionPaged } from '../interfaces/projection';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectionService {
  private apiUrl = environment.apiUrl;
  private currentProjection = new BehaviorSubject<Projection | null>(null);
  currentProjection$ = this.currentProjection.asObservable();

  constructor(private http: HttpClient) {}

  updateProjection(data: Projection) {
    this.currentProjection.next(data);
  }

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

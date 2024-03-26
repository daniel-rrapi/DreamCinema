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

  getProjections(pageNum = 0, size = 10, orderBy = 'day') {
    return this.http.get<ProjectionPaged>(
      `${this.apiUrl}/projections?pageNumber=${pageNum}&size=${size}&orderBy=${orderBy}`
    );
  }

  saveProjection(projection: Projection) {
    return this.http.post<Projection>(`${this.apiUrl}/projections`, projection);
  }

  updateModifiedProjection(modifiedProjection: Projection) {
    return this.http.put<Projection>(
      `${this.apiUrl}/projections`,
      modifiedProjection
    );
  }

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

  delete(id: string) {
    return this.http.delete(`${this.apiUrl}/projections/${id}`);
  }
}

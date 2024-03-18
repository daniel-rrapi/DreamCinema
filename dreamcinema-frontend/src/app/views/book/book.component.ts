import { Component, OnInit } from '@angular/core';
import { NgControlStatusGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, switchMap, tap } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Movie } from 'src/app/interfaces/movie';
import { UserData } from 'src/app/interfaces/user-data';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  movie!: Movie;
  movieId!: string | null;
  user!: UserData | null;
  isSeatsPopUp = false;
  aggiornaValore(nuovoValore: boolean) {
    this.isSeatsPopUp = nuovoValore;
  }
  constructor(
    private movieSrv: MovieService,
    private authSrv: AuthService,
    private route: ActivatedRoute
  ) {
    authSrv.restore();
    authSrv.user$.subscribe((res) => (this.user = res));

    route.paramMap
      .pipe(
        map((param) => {
          const id = param.get('id');
          return id;
        })
      )
      .subscribe((id) => {
        this.movieId = id;
      });
  }

  ngOnInit(): void {
    this.movieSrv.getMovieById(this.movieId).subscribe((data) => {
      this.movie = data;
    });
  }
}

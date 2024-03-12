import { Component, OnInit } from '@angular/core';
import { NgControlStatusGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, switchMap, tap } from 'rxjs';
import { ContentMovie } from 'src/app/interfaces/movie-response';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  movie!: ContentMovie;
  movieId!: string | null;
  constructor(private movieSrv: MovieService, private route: ActivatedRoute) {
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
      console.log(this.movie);
    });
  }
}

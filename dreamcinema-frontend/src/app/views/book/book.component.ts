import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  constructor(private movieSrv: MovieService, private route: ActivatedRoute) {
    route.paramMap
      .pipe(
        map((param) => {
          const id = param.get('id');
          console.log(id);
        })
      )
      .subscribe();
  }

  ngOnInit(): void {}
}

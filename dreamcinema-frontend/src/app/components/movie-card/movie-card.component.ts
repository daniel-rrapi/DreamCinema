import { Component, Input, OnInit } from '@angular/core';
import { ContentMovie, MovieResponse } from 'src/app/interfaces/movie-response';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() movies: ContentMovie[] = [];
  @Input() index!: number;

  constructor() {}
  ngOnInit(): void {}
}

import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() movies: Movie[] = [];
  @Input() index!: number;

  constructor() {}
  ngOnInit(): void {}
}

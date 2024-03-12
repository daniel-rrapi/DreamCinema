import { Component, Input, OnInit } from '@angular/core';
import { ContentMovie } from 'src/app/interfaces/movie-response';

@Component({
  selector: 'app-dates-book',
  templateUrl: './dates-book.component.html',
  styleUrls: ['./dates-book.component.scss'],
})
export class DatesBookComponent implements OnInit {
  @Input() movie!: ContentMovie;
  constructor() {}

  ngOnInit(): void {}
}

import { Component, Input, OnInit } from '@angular/core';
import { MovieContent } from 'src/app/interfaces/movie-response';

@Component({
  selector: 'app-dates-book',
  templateUrl: './dates-book.component.html',
  styleUrls: ['./dates-book.component.scss'],
})
export class DatesBookComponent implements OnInit {
  @Input() movie!: MovieContent;
  constructor() {}

  ngOnInit(): void {}
}

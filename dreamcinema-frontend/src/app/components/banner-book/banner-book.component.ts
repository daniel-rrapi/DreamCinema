import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-banner-book',
  templateUrl: './banner-book.component.html',
  styleUrls: ['./banner-book.component.scss'],
})
export class BannerBookComponent implements OnInit {
  @Input() movie!: Movie;
  constructor() {}

  ngOnInit(): void {}
}

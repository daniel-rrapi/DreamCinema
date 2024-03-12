import { Component, Input, OnInit } from '@angular/core';
import { ContentMovie } from 'src/app/interfaces/movie-response';

@Component({
  selector: 'app-banner-book',
  templateUrl: './banner-book.component.html',
  styleUrls: ['./banner-book.component.scss'],
})
export class BannerBookComponent implements OnInit {
  @Input() movie!: ContentMovie;
  constructor() {}

  ngOnInit(): void {}
}

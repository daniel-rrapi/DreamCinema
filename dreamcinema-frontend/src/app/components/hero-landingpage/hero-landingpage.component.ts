import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-hero-landingpage',
  templateUrl: './hero-landingpage.component.html',
  styleUrls: ['./hero-landingpage.component.scss'],
})
export class HeroLandingpageComponent implements OnInit {
  bannerUrl: string = '../../../assets/imgs/black_background.png';
  title: string = '';
  genres: string[] = [];
  year!: number;
  time!: any;
  id!: string;
  link!: string;

  constructor(private movieSrv: MovieService) {}

  ngOnInit(): void {
    this.movieSrv.getMovies().subscribe((data) => {
      this.bannerUrl = data.content[0].bannerUrl;
      this.title = data.content[0].title;
      this.genres = data.content[0].genres;
      this.year = data.content[0].year;
      this.time = data.content[0].duration;
      this.id = data.content[0].id;
      this.link = 'book/' + this.id;
    });
  }
}

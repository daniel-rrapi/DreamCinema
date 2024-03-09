import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-hero-landingpage',
  templateUrl: './hero-landingpage.component.html',
  styleUrls: ['./hero-landingpage.component.scss'],
})
export class HeroLandingpageComponent implements OnInit {
  bannerUrl: string = '';
  constructor(private movieSrv: MovieService) {}

  ngOnInit(): void {
    this.movieSrv.getFirstMovie().subscribe((data) => {
      this.bannerUrl = data.content[0].bannerUrl;
      console.log(this.bannerUrl);
    });
  }
}

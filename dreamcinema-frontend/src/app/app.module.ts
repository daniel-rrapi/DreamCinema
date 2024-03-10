import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './views/landingpage/landingpage.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { HeroLandingpageComponent } from './components/hero-landingpage/hero-landingpage.component';

import { MoviesLandingpageComponent } from './components/movies-landingpage/movies-landingpage.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { HourFormatterPipe } from './pipes/hour-formatter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    NavbarComponent,
    HeroLandingpageComponent,

    MoviesLandingpageComponent,
    MovieCardComponent,
    HourFormatterPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

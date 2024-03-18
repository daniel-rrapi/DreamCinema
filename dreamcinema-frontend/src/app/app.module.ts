import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './views/landingpage/landingpage.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { HeroLandingpageComponent } from './components/hero-landingpage/hero-landingpage.component';

import { MoviesLandingpageComponent } from './components/movies-landingpage/movies-landingpage.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { HourFormatterPipe } from './pipes/hour-formatter.pipe';
import { BookComponent } from './views/book/book.component';
import { BannerBookComponent } from './components/banner-book/banner-book.component';
import { DatesBookComponent } from './components/dates-book/dates-book.component';
import { NumberToMonthPipe } from './pipes/number-to-month.pipe';
import { SeatsPopupBookComponent } from './components/seats-popup-book/seats-popup-book.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { ProfileComponent } from './views/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    NavbarComponent,
    HeroLandingpageComponent,

    MoviesLandingpageComponent,
    MovieCardComponent,
    HourFormatterPipe,
    BookComponent,
    BannerBookComponent,
    DatesBookComponent,
    NumberToMonthPipe,
    SeatsPopupBookComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

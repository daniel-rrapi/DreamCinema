import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DateNumbers, Dates } from 'src/app/interfaces/dates';
import { Movie } from 'src/app/interfaces/movie';
import { Projection, ProjectionPaged } from 'src/app/interfaces/projection';
import { ProjectionService } from 'src/app/services/projection.service';

@Component({
  selector: 'app-dates-book',
  templateUrl: './dates-book.component.html',
  styleUrls: ['./dates-book.component.scss'],
})
export class DatesBookComponent implements OnInit {
  @Input() movie!: Movie;
  @Input() isSeatsPopUp!: boolean;
  @Output() changeSeatsBoolean = new EventEmitter<boolean>();
  dates: Dates[] = [];
  currentDate!: Dates;
  currentMoviesByDay!: ProjectionPaged | null;

  constructor(private projectionsSrv: ProjectionService) {}

  onClick(date: Dates) {
    this.currentDate = date;
    let day = date.date.date;
    let month = date.date.month + 1;
    let year = date.date.year;
    this.projectionsSrv
      .getProjectionsByMovieIdAndDay(day, month, year, this.movie.id)
      .subscribe(
        (res) => (this.currentMoviesByDay = res),
        (err) => (this.currentMoviesByDay = null)
      );
  }
  goToSeats(content: Projection) {
    this.isSeatsPopUp = true;
    this.changeSeatsBoolean.emit(this.isSeatsPopUp);
    this.projectionsSrv.updateProjection(content);
  }
  ngOnInit(): void {
    let moment = require('moment');
    moment().format();

    let date = moment().get('date');
    let month = moment().get('month');
    let year = moment().get('year');
    let today: DateNumbers = { date, month, year };
    let weekday = moment().format('dddd');
    let todayObj: Dates = { name: 'today', weekday: weekday, date: today };
    this.dates.push(todayObj);

    date = moment().add(1, 'days').get('date');
    month = moment().add(1, 'days').get('month');
    year = moment().add(1, 'days').get('year');
    weekday = moment().add(1, 'days').format('dddd');

    let tomorrow: DateNumbers = { date, month, year };
    let tomorrowObj = { name: 'oneDayLater', weekday: weekday, date: tomorrow };
    this.dates.push(tomorrowObj);

    date = moment().add(2, 'days').get('date');
    month = moment().add(2, 'days').get('month');
    year = moment().add(2, 'days').get('year');
    weekday = moment().add(2, 'days').format('dddd');
    let twoDaysLater: DateNumbers = { date, month, year };
    let twoDaysLaterObj = {
      name: 'twoDaysLater',
      weekday: weekday,
      date: twoDaysLater,
    };
    this.dates.push(twoDaysLaterObj);

    date = moment().add(3, 'days').get('date');
    month = moment().add(3, 'days').get('month');
    year = moment().add(3, 'days').get('year');
    weekday = moment().add(3, 'days').format('dddd');
    let threeDaysLater: DateNumbers = { date, month, year };
    let threeDaysLaterObj = {
      name: 'threeDaysLater',
      weekday: weekday,
      date: threeDaysLater,
    };
    this.dates.push(threeDaysLaterObj);

    date = moment().add(4, 'days').get('date');
    month = moment().add(4, 'days').get('month');
    year = moment().add(4, 'days').get('year');
    weekday = moment().add(4, 'days').format('dddd');
    let fourDaysLater: DateNumbers = { date, month, year };
    let fourDaysLaterObj = {
      name: 'fourDaysLater',
      weekday: weekday,
      date: fourDaysLater,
    };
    this.dates.push(fourDaysLaterObj);

    date = moment().add(5, 'days').get('date');
    month = moment().add(5, 'days').get('month');
    year = moment().add(5, 'days').get('year');
    weekday = moment().add(5, 'days').format('dddd');
    let fiveDaysLater: DateNumbers = { date, month, year };
    let fiveDaysLaterObj = {
      name: 'fiveDaysLater',
      weekday: weekday,
      date: fiveDaysLater,
    };
    this.dates.push(fiveDaysLaterObj);

    date = moment().add(6, 'days').get('date');
    month = moment().add(6, 'days').get('month');
    year = moment().add(6, 'days').get('year');
    weekday = moment().add(6, 'days').format('dddd');
    let sixDaysLater: DateNumbers = { date, month, year };
    let sixDaysLaterObj = {
      name: 'sixDaysLater',
      weekday: weekday,
      date: sixDaysLater,
    };
    this.dates.push(sixDaysLaterObj);

    console.log(this.dates);
  }
}

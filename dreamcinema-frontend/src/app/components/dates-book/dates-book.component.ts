import { Component, Input, OnInit } from '@angular/core';
import { DateNumbers, Dates } from 'src/app/interfaces/dates';
import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-dates-book',
  templateUrl: './dates-book.component.html',
  styleUrls: ['./dates-book.component.scss'],
})
export class DatesBookComponent implements OnInit {
  @Input() movie!: Movie;
  dates: Dates[] = [];

  constructor() {}

  ngOnInit(): void {
    let moment = require('moment');
    moment().format();

    let date = moment().get('date');
    let month = moment().get('month');
    let year = moment().get('year');
    let today: DateNumbers = { date, month, year };
    let todayObj: Dates = { name: 'today', date: today };
    this.dates.push(todayObj);
    console.log(this.dates);
    // this.dates.push(today);

    // let oneDayLaterDate = moment().add(1, 'days').get('date');
    // let oneDayLaterMonth = moment().add(1, 'days').get('month');
    // let oneDayLaterYear = moment().add(1, 'days').get('year');
    // let tomorrow = { oneDayLaterDate, oneDayLaterMonth, oneDayLaterYear };
    // this.dates.push(tomorrow);

    // console.log(this.dates)
  }
}

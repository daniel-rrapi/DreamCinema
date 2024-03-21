import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tickets-profile',
  templateUrl: './tickets-profile.component.html',
  styleUrls: ['./tickets-profile.component.scss'],
})
export class TicketsProfileComponent implements OnInit {
  canvas!: HTMLElement;
  constructor() {}

  ngOnInit(): void {}
}

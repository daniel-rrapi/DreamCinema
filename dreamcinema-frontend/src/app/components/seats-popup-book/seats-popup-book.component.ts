import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seats-popup-book',
  templateUrl: './seats-popup-book.component.html',
  styleUrls: ['./seats-popup-book.component.scss'],
})
export class SeatsPopupBookComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    document.body.style.overflow = 'hidden';
  }
}

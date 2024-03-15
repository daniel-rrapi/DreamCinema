import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Projection } from 'src/app/interfaces/projection';
import { Seat, SeatPaged } from 'src/app/interfaces/seat';
import { ProjectionService } from 'src/app/services/projection.service';
import { SeatService } from 'src/app/services/seat.service';

@Component({
  selector: 'app-seats-popup-book',
  templateUrl: './seats-popup-book.component.html',
  styleUrls: ['./seats-popup-book.component.scss'],
})
export class SeatsPopupBookComponent implements OnInit {
  @Output() changeSeatsBoolean = new EventEmitter<boolean>();
  currentProjection!: Projection | null;
  seatsPaged!: SeatPaged;
  selectedSeat: number = 0;
  constructor(
    private projectionSrv: ProjectionService,
    private seatsSrv: SeatService
  ) {}

  ngOnInit(): void {
    document.body.style.overflow = 'hidden';
    this.projectionSrv.currentProjection$.subscribe((data) => {
      this.currentProjection = data;
    });
    if (this.currentProjection) {
      this.seatsSrv
        .getSeatsByProjectionId(this.currentProjection?.id)
        .subscribe((data) => (this.seatsPaged = data));
    }
  }
  exit() {
    this.changeSeatsBoolean.emit(false);
  }
  onClickSeat(seat: Seat) {
    this.selectedSeat = seat.number;
    console.log(this.selectedSeat);
  }
}

import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Projection } from 'src/app/interfaces/projection';
import { Seat, SeatPaged } from 'src/app/interfaces/seat';
import { UserData } from 'src/app/interfaces/user-data';
import { ProjectionService } from 'src/app/services/projection.service';
import { SeatService } from 'src/app/services/seat.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-seats-popup-book',
  templateUrl: './seats-popup-book.component.html',
  styleUrls: ['./seats-popup-book.component.scss'],
})
export class SeatsPopupBookComponent implements OnInit, OnDestroy {
  @Output() changeSeatsBoolean = new EventEmitter<boolean>();
  user!: UserData | null;
  currentProjection!: Projection | null;
  seatsPaged!: SeatPaged;
  selectedSeat: number = 0;
  constructor(
    private projectionSrv: ProjectionService,
    private seatsSrv: SeatService,
    private ticketSrv: TicketService,
    private authSrv: AuthService,
    private route: Router
  ) {
    authSrv.restore();
    authSrv.user$.subscribe((data) => (this.user = data));
  }
  ngOnDestroy(): void {
    document.body.style.overflow = 'scroll';
  }

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
  }
  checkout() {
    if (!this.user) {
      this.route.navigate(['/login']);
      return;
    } else {
      if (
        this.selectedSeat !== 0 &&
        this.currentProjection &&
        this.selectedSeat
      ) {
        let seat = this.seatsPaged.content.filter(
          (seat) => this.selectedSeat == seat.number
        );
        let seatId = seat[0].id;

        this.ticketSrv
          .bookTicket(this.user.id, this.currentProjection.id, seatId)
          .subscribe((res) => {});
      }
    }
  }
}

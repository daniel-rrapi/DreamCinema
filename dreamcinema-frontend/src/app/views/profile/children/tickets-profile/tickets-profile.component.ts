import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ticket, TicketPaged } from 'src/app/interfaces/ticket';
import { PopupService } from 'src/app/services/popup.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-tickets-profile',
  templateUrl: './tickets-profile.component.html',
  styleUrls: ['./tickets-profile.component.scss'],
})
export class TicketsProfileComponent implements OnInit, OnDestroy {
  pagedTickets!: TicketPaged;
  currentTicket!: Ticket;
  isQrCodeDisplayed = false;
  constructor(
    private ticketSrv: TicketService,
    private popupSrv: PopupService
  ) {
    ticketSrv.getTicketsByUser().subscribe((res) => (this.pagedTickets = res));
  }

  ngOnDestroy(): void {
    this.popupSrv.setPopupState(false);
  }

  ngOnInit(): void {}

  displayQrCode(ticket: Ticket) {
    this.currentTicket = ticket;
    this.isQrCodeDisplayed = true;
    this.popupSrv.setPopupState(true);
  }
  closeQrCodeWindow(value: boolean) {
    this.isQrCodeDisplayed = value;
    this.popupSrv.setPopupState(false);
  }
}

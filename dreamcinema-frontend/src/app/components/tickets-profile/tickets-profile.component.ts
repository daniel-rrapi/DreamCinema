import { Component, OnInit } from '@angular/core';
import { Ticket, TicketPaged } from 'src/app/interfaces/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-tickets-profile',
  templateUrl: './tickets-profile.component.html',
  styleUrls: ['./tickets-profile.component.scss'],
})
export class TicketsProfileComponent implements OnInit {
  pagedTickets!: TicketPaged;
  currentTicket!: Ticket;
  isQrCodeDisplayed = false;
  constructor(private ticketSrv: TicketService) {
    ticketSrv.getTicketsByUser().subscribe((res) => (this.pagedTickets = res));
  }

  ngOnInit(): void {}

  displayQrCode(ticket: Ticket) {
    this.currentTicket = ticket;
    this.isQrCodeDisplayed = true;
  }
  closeQrCodeWindow(value: boolean) {
    this.isQrCodeDisplayed = value;
  }
}

import { Component, OnInit } from '@angular/core';
import { TicketPaged } from 'src/app/interfaces/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-tickets-profile',
  templateUrl: './tickets-profile.component.html',
  styleUrls: ['./tickets-profile.component.scss'],
})
export class TicketsProfileComponent implements OnInit {
  pagedTickets!: TicketPaged;
  constructor(private ticketSrv: TicketService) {
    ticketSrv.getTicketsByUser().subscribe((res) => (this.pagedTickets = res));
  }

  ngOnInit(): void {}
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Seat } from '../interfaces/seat';
import { TicketPaged } from '../interfaces/ticket';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getTicketsByUser() {
    return this.http.get<TicketPaged>(`${this.apiUrl}/tickets/user`);
  }

  bookTicket(userId: string, projectionId: string, seatId: string) {
    return this.http.post<Seat>(`${this.apiUrl}/tickets`, {
      user: userId,
      projection: projectionId,
      seat: seatId,
    });
  }
}

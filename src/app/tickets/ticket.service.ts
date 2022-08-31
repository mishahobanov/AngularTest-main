import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITicket } from './ticket.model';

@Injectable({ providedIn: 'root' })
export class TicketsService {

    constructor(private http: HttpClient) {

    }

    getTickets(): Observable<ITicket[]> {
        return this.http.get<ITicket[]>('http://localhost:3000/tickets');
    }

    insertElement(
        ticket: Partial<ITicket>
      ): Observable<ITicket> {
        return this.http.post<ITicket>(
          'http://localhost:3000/tickets',
          ticket
        );
      }
    
      updateElement(
        ticket: Partial<ITicket>
      ): Observable<ITicket> {
        return this.http.put<ITicket>(
          `http://localhost:3000/tickets/${ticket.id}`,
          ticket
        );
      }
    
}
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TicketState } from '../ticket.module';
import{getTicketsWithStatuNew} from '../state/ticket.selector';

@Component({
  selector: 'app-ticket-filter',
  templateUrl: './ticket-filter.component.html',
  styleUrls: ['./ticket-filter.component.scss']
})
export class TicketFilterComponent {

  constructor(private store: Store<TicketState>) {}

  onSubmit(): void{
    this.store
      .select(getTicketsWithStatuNew);;
  }
}

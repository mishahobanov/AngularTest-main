import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { TicketDialogComponent } from '../ticket-dialog/ticket-dialog.component';
import{getTickets} from '../state/ticket.selector';
import { select, Store } from '@ngrx/store';
import { ITicket, Ticket } from '../ticket.model';
import { LoadTickets, LoadTicketsSuccess } from '../state/ticket.actions';
import { TicketState } from '../ticket.module';



@Component({
  selector: 'app-ticket-home',
  templateUrl: './ticket-home.component.html',
  styleUrls: ['./ticket-home.component.css']
})
export class TicketHomeComponent implements OnInit {

  tickets$: Observable<Ticket[]> = this.store.pipe(
    select(getTickets)
  );

  // filter$: Observable<UiFilterCrud> = this.store.pipe(select(getFilterCrud));

  title = 'AngularTest';
  constructor(private store: Store<TicketState>, private dialog : MatDialog){

  }
  ngOnInit() {
    this.store.dispatch(LoadTickets());
  }
  
  openDialog() {
    this.dialog.open(TicketDialogComponent,{
      data: {
        element: null,
      },
    });

    
  }

}

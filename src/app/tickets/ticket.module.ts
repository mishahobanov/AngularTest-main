import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { SharedModule } from "../shared/shared.module";
import { TicketDialogComponent } from "./ticket-dialog/ticket-dialog.component";
import { TicketFilterComponent } from "./ticket-filter/ticket-filter.component";
import { TicketListComponent } from "./ticket-list/ticket-list.component";
import { TicketsEffects } from "./state/ticket.effects";
import { ticketReducer } from "./state/app-state";

import { TicketsRoutingModule } from "./ticket-routing.module";
import { TicketHomeComponent } from "./ticket-home/ticket-home.component";
import { EffectsModule } from "@ngrx/effects";
import { TicketsService } from "./ticket.service";
import { Ticket } from "./ticket.model";

export interface TicketState {
  tickets: {
    tickets: Ticket[];
  };
}

@NgModule({
  declarations: [
    TicketListComponent,
    TicketDialogComponent,
    TicketFilterComponent,
    TicketHomeComponent
  ],
    imports:[
      CommonModule,
      SharedModule,
      StoreModule.forFeature('tickets',ticketReducer),
      TicketsRoutingModule,
      EffectsModule.forFeature([TicketsEffects])
      ],
      exports:[
        TicketListComponent,
        TicketDialogComponent,
        TicketFilterComponent,
        TicketHomeComponent
      ],
  providers: [TicketsService],

   
})
export class TicketModule{}
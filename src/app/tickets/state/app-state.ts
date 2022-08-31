import { ActionReducerMap } from "@ngrx/store";
import { TicketState } from "../ticket.module";
import { ticketsReducer } from "./ticket.reducer";


export const ticketReducer: ActionReducerMap<TicketState> = {
    tickets: ticketsReducer
};

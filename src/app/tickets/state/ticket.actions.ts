import { createAction, props } from '@ngrx/store';
import { Ticket } from '../ticket.model';
import { TicketState } from '../ticket.module';

export const enum ticketsTypeAction {

  LOAD_TICKETS = '[LOAD_TICKTES] LOAD TICKTES',
  LOAD_TICKTES_SUCCESS = '[LOAD_TICKTES_SUCCESS] LOAD TICKTES SUCCESS',
  LOAD_TICKTES_FAIL = '[LOAD_TICKTES_FAIL] LOAD TICKTES FAIL',

  CREATE_TICKETS = '[CREATE_TICKETS] CREATE TICKETS',
  CREATE_TICKETS_SUCCESS = '[CREATE_TICKETS_SUCCESS] CREATE TICKETS SUCCESS',
  CREATE_TICKETS_FAIL = '[CREATE_TICKETS_FAIL] CREATE TICKETS FAIL',

  UPDATE_TICKETS = '[UPDATE_TICKETS] UPDATE TICKETS',
  UPDATE_TICKETS_SUCCESS = '[UPDATE_TICKETS_SUCCESS] UPDATE TICKETS SUCCESS',
  UPDATE_TICKETS_FAIL = '[UPDATE_TICKETS_FAIL] UPDATE TICKETS FAIL',


}
// Load Tickets

export const LoadTickets = createAction(
  ticketsTypeAction.LOAD_TICKETS
);

export const LoadTicketsSuccess = createAction(
  ticketsTypeAction.LOAD_TICKTES_SUCCESS,
  props<{ payload: Ticket[] }>()
);

export const LoadTicketsFail = createAction(
  ticketsTypeAction.LOAD_TICKTES_FAIL
);

// Create Tickets
export const createTickets = createAction(
  ticketsTypeAction.CREATE_TICKETS,
  props<{ payload: Ticket }>()
);

export const createTicketsSuccess = createAction(
  ticketsTypeAction.CREATE_TICKETS_SUCCESS,
  props<{ payload: Ticket }>()
);

export const createTicketsFail = createAction(
  ticketsTypeAction.CREATE_TICKETS_FAIL
);

// Update Tickets

export const updateTickets = createAction(
  ticketsTypeAction.UPDATE_TICKETS,
  props<{ payload: Ticket }>()
);

export const updateTicketsSuccess = createAction(
  ticketsTypeAction.UPDATE_TICKETS_SUCCESS,
  props<{ payload: Ticket }>()
);

export const updateTicketsFail = createAction(
  ticketsTypeAction.UPDATE_TICKETS_FAIL
);


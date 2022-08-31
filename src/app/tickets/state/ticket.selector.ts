import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TicketState } from '../ticket.module';

export const getTicketsFeatureState = createFeatureSelector<TicketState>(
    'tickets'
)

export const getTickets = createSelector(
    getTicketsFeatureState,
    (state: TicketState) => state.tickets.tickets
)

export const getTicketsWithStatuNew = createSelector(
    getTicketsFeatureState,
    (state: TicketState) => state.tickets.tickets.filter((filter)=> filter.status == 'New')
)

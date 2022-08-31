import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, mergeMap, map, of,exhaustMap } from "rxjs";
import { TicketsService } from "../ticket.service";
import * as fromTicketActions from "./ticket.actions"

@Injectable()
export class TicketsEffects {
    constructor(private actions$: Actions, private ticketsService: TicketsService) {
    }

    loadTickets$ = createEffect(
        () =>
            this.actions$.pipe(
            ofType(fromTicketActions.LoadTickets),
            exhaustMap(() =>
            this.ticketsService.getTickets()
            .pipe(
                map((payload) => fromTicketActions.LoadTicketsSuccess({ payload })),
                catchError(() => of(fromTicketActions.LoadTicketsFail()))
                )
            )
            )
        );

    insertElement$ = createEffect(
        () =>
            this.actions$.pipe(
            ofType(fromTicketActions.createTickets),
            exhaustMap((action) =>
                this.ticketsService.insertElement(action.payload).pipe(
                map((result) => fromTicketActions.createTicketsSuccess({ payload: result })),
                catchError(() => of(fromTicketActions.createTicketsFail()))
                )
            )
            )
        );

        updateElement$ = createEffect(() =>
            this.actions$.pipe(
            ofType(fromTicketActions.updateTickets),
            exhaustMap((action) =>
                this.ticketsService.updateElement(action.payload).pipe(
                map((result) => fromTicketActions.updateTicketsSuccess({ payload: result })),
                catchError(() => of(fromTicketActions.updateTicketsFail()))
                )
            )
            )
        );
}
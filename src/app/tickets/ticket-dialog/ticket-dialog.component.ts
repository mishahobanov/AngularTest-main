import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { createTickets, updateTickets } from '../state/ticket.actions';
import { TicketState } from '../ticket.module';
import departments, { ITicket, Ticket } from '../ticket.model';

export interface DialogInsertElement {
  element: Ticket;
}

@Component({
  selector: 'app-ticket-dialog',
  templateUrl: './ticket-dialog.component.html',
  styleUrls: ['./ticket-dialog.component.scss'],
})
export class TicketDialogComponent  {

  editMode: boolean = false;

  form: FormGroup;

  departmentList = departments;

  editorStyle : {
    height:'400px',
  }

  config={
    toolbar:[
      ['bold', 'italic', 'underline', 'strike'], 
      [{ 'header': 1 }, { 'header': 2 }],     
      ['link'] 
    ]
  }
  constructor(
    private store: Store<TicketState>,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<TicketDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dataDialog: DialogInsertElement
  ) {
    if (dataDialog.element) {
      this.editMode = true;
    }
    this.form = this.fb.group({
      title:  ['', [Validators.required]],
      department:  ['', [Validators.required]],
      message: ['', [Validators.required]],
      attachment: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    const obj:Ticket = {
      ...this.dataDialog.element,
      ...this.form.value,
    };

    if (this.editMode) {
      let ticketEdit : Ticket = {
        id: obj.id,
        departmentIdentifier:obj.departmentIdentifier,
        title:obj.title,
        message:obj.message,
        attachment:obj.attachment,
        status:'Edited',
        createdAt:obj.createdAt,
        updateAt:new Date(Date.now())
      }
      this.store.dispatch(
        updateTickets({
          payload: ticketEdit,
        })
      );
    } else {
      let ticketCreate: Ticket = {
        id: "a" + Math.floor(Math.random() * 10) + 1,
        departmentIdentifier: obj.departmentIdentifier,
        title: obj.title,
        message: obj.message,
        attachment: obj.attachment,
        status: 'New',
        createdAt: new Date(Date.now()),
        updateAt:new Date(Date.now())
      }
      this.store.dispatch(
        createTickets({
          payload: ticketCreate,
        })
      );
    }

    this.dialogRef.close();
  }
  
}


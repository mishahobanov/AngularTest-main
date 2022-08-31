import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import departments, { ITicket, Ticket } from '../ticket.model';

import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { TicketState } from '../ticket.module';
import { TicketDialogComponent } from '../ticket-dialog/ticket-dialog.component';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketListComponent implements AfterViewInit {
  @Input() items: Ticket[] | null;

  displayedColumns: string[] = ['id', 'createdAt','updateAt','departmentName', 'title', 'status','details'];
  
  dataSource: MatTableDataSource<Ticket> = new MatTableDataSource();
  resultsLength = 0;

  constructor(private dialog: MatDialog,
    private cdRef: ChangeDetectorRef,
    private store: Store<TicketState>) {

    this.items = [];

     }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['items'] &&
      changes['items'].currentValue &&
      !changes['items'].firstChange
    ) {
      this.dataSource.data = this.mapDepartmentById(this.items) || [];
      this.resultsLength = this.dataSource.data.length;
      this.cdRef.detectChanges();
    }
  }

  ngAfterViewInit() {
   this.dataSource.data = this.mapDepartmentById(this.items) || [];
    this.resultsLength = this.dataSource.data.length;
    this.dataSource.paginator = this.paginator;
    this.cdRef.detectChanges();
  }

  onUpdateElement(element: Ticket) {
    this.dialog.open(TicketDialogComponent, {
      data: {
        element: element,
      },
    });
  }
  mapDepartmentById(tickets: Ticket[] | null) {
    
    return tickets?.map(item => {
    return { ...item, departmentName: departments.find(i => i.id == item.departmentIdentifier)?.deparmentName! };
    });
    
  }
}

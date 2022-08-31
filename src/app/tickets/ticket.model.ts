// export interface ITicketRows {
//     identifier: string;
//     departmentIdentifier: string;
//     title: string;
//     status: string;
//     createdAt: string;
//     updateAt: string;
//   }
  export interface ITicket {
    id: string;
    departmentIdentifier: string;
    title: string;
    message: string;
    attachment: string;
    status: string;
    createdAt: Date;
    updateAt: Date;
  }

  export class Ticket implements ITicket {
    id: string;
    departmentIdentifier: string;
    departmentName?: string;
    title: string;
    message: string;
    attachment: string;
    status: string;
    createdAt: Date;
    updateAt: Date;
  
    constructor(data: Partial<Ticket> = {}) {
      Object.assign(this, data);
    }
  }

export interface IDep {
  id: string;
  deparmentName:string;
}

  export class Department implements IDep {
    id: string;
    deparmentName: string;
 
    constructor(data: Partial<Ticket> = {}) {
      Object.assign(this, data);
    }
  }

  let departments:Department[] = [
    {id: '1', deparmentName: 'Sales departament'},
    {id: '2', deparmentName: 'Financial departament'},
    {id: '3', deparmentName: 'Technical departament'},
    {id: '4', deparmentName: 'Security departament'},
  ];

  export default departments;
  // export class ITicketRows {
  //   identifier: string;
  //   departmentIdentifier: string;
  //   title: string;
  //   status: string;
  //   createdAt: string;
  //   updateAt: string;
  //   constructor(data: Partial<ITicketRows> = {}) {
  //     Object.assign(this, data);
  //   }
  // }
import { Pageable } from './pageable';
import { Projection } from './projection';
import { Seat } from './seat';
import { Sort } from './sort';
import { UserData } from './user-data';

export interface TicketPaged {
  content: Ticket[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  first: boolean;
  size: number;
  number: number;
  sort: Sort;
  numberOfElements: number;
  empty: boolean;
}
export interface Ticket {
  id: string;
  user: UserData;
  projection: Projection;
  seat: Seat;
}

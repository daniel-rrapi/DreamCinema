import { Pageable } from './pageable';
import { Sort } from './sort';

export interface SeatPaged {
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
  user: string;
  projection: string;
  seat: string;
}

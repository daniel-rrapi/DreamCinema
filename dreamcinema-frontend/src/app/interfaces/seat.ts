import { Pageable } from './pageable';
import { Projection } from './projection';
import { Sort } from './sort';

export interface SeatPaged {
  content: Seat[];
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
export interface Seat {
  id: string;
  number: number;
  projection: Projection;
  booked: boolean;
}

import { Pageable } from './pageable';
import { Sort } from './sort';

export interface DayPaged {
  content: Day[];
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
export interface Day {
  id: string;
  date: Date;
}

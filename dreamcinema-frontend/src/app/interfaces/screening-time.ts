import { Pageable } from './pageable';
import { Sort } from './sort';

export interface ScreeningTimePaged {
  content: ScreeningTime[];
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
export interface ScreeningTime {
  id: string;
  startTime: string;
}

import { Pageable } from './pageable';
import { Sort } from './sort';

export interface MovieRoomPaged {
  content: MovieRoom[];
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
export interface MovieRoom {
  id: string;
  name: string;
}

import { Pageable } from './pageable';
import { Sort } from './sort';

export interface MoviePaged {
  content: Movie[];
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

export interface Movie {
  id: string;
  title: string;
  description: string;
  year: number;
  country: string;
  duration: string;
  posterUrl: string;
  bannerUrl: string;
  genres: string[];
}

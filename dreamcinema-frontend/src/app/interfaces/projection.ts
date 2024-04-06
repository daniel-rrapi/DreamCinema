import { Day } from './day';
import { Movie } from './movie';
import { MovieRoom } from './movie-room';
import { Pageable } from './pageable';
import { ScreeningTime } from './screening-time';
import { Sort } from './sort';

export interface ProjectionPaged {
  content: Projection[];
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

export interface Projection {
  id: string;
  movie: Movie;
  day: Day;
  screeningTime: ScreeningTime;
  movieRoom: MovieRoom;
}

import { TestBed } from '@angular/core/testing';

import { MovieRoomService } from './movie-room.service';

describe('MovieRoomService', () => {
  let service: MovieRoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieRoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

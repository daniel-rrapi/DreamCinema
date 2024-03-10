import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesLandingpageComponent } from './movies-landingpage.component';

describe('MoviesLandingpageComponent', () => {
  let component: MoviesLandingpageComponent;
  let fixture: ComponentFixture<MoviesLandingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesLandingpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesLandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

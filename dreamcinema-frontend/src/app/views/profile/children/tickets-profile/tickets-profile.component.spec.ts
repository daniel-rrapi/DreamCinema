import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsProfileComponent } from './tickets-profile.component';

describe('TicketsProfileComponent', () => {
  let component: TicketsProfileComponent;
  let fixture: ComponentFixture<TicketsProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketsProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketsProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

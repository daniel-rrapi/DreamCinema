import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatsPopupBookComponent } from './seats-popup-book.component';

describe('SeatsPopupBookComponent', () => {
  let component: SeatsPopupBookComponent;
  let fixture: ComponentFixture<SeatsPopupBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatsPopupBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeatsPopupBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

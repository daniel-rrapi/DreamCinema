import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatesBookComponent } from './dates-book.component';

describe('DatesBookComponent', () => {
  let component: DatesBookComponent;
  let fixture: ComponentFixture<DatesBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatesBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatesBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

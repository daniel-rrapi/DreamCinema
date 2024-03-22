import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPanelProfileComponent } from './admin-panel-profile.component';

describe('AdminPanelProfileComponent', () => {
  let component: AdminPanelProfileComponent;
  let fixture: ComponentFixture<AdminPanelProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPanelProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPanelProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

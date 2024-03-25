import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProjectionsAdminComponent } from './manage-projections-admin.component';

describe('ManageProjectionsAdminComponent', () => {
  let component: ManageProjectionsAdminComponent;
  let fixture: ComponentFixture<ManageProjectionsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageProjectionsAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageProjectionsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

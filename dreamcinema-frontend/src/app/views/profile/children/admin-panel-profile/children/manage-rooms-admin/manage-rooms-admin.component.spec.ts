import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRoomsAdminComponent } from './manage-rooms-admin.component';

describe('ManageRoomsAdminComponent', () => {
  let component: ManageRoomsAdminComponent;
  let fixture: ComponentFixture<ManageRoomsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageRoomsAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageRoomsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

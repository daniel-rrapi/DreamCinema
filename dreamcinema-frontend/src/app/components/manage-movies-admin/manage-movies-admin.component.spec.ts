import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMoviesAdminComponent } from './manage-movies-admin.component';

describe('ManageMoviesAdminComponent', () => {
  let component: ManageMoviesAdminComponent;
  let fixture: ComponentFixture<ManageMoviesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageMoviesAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageMoviesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

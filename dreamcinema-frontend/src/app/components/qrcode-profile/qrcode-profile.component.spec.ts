import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodeProfileComponent } from './qrcode-profile.component';

describe('QrcodeProfileComponent', () => {
  let component: QrcodeProfileComponent;
  let fixture: ComponentFixture<QrcodeProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrcodeProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrcodeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

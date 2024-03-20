import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { UserData } from 'src/app/interfaces/user-data';

@Component({
  selector: 'app-overview-profile',
  templateUrl: './overview-profile.component.html',
  styleUrls: ['./overview-profile.component.scss'],
})
export class OverviewProfileComponent implements OnInit {
  user!: UserData | null;
  profileForm!: FormGroup;
  areInputsDisabled!: boolean;
  constructor(private authSrv: AuthService) {
    authSrv.user$.subscribe(
      (res) => (
        (this.user = res), this.initializeForm(), this.disableEditMode()
      )
    );
  }

  ngOnInit(): void {}

  initializeForm() {
    this.profileForm = new FormGroup({
      firstName: new FormControl(this.user?.name),
      lastName: new FormControl(this.user?.surname),
      email: new FormControl(this.user?.email),
      dob: new FormControl(this.user?.dob),
    });
  }

  disableEditMode() {
    this.profileForm.disable();
    this.areInputsDisabled = true;
  }

  editProfileBtn() {
    this.profileForm.enable();
    this.areInputsDisabled = false;
  }

  saveChanges() {}

  cancelChanges() {
    this.profileForm.get('firstName')?.patchValue(this.user?.name);
    this.profileForm.get('lastName')?.patchValue(this.user?.surname);
    this.profileForm.get('email')?.patchValue(this.user?.email);
    this.profileForm.get('dob')?.patchValue(this.user?.dob);
    this.profileForm.disable();
    this.areInputsDisabled = true;
  }
}

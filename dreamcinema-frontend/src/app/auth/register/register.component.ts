import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { last } from 'rxjs';
import { NewUser } from 'src/app/interfaces/new-user';
import { AuthService } from '../auth.service';
import { passwordsMatch } from 'src/app/validators/custom-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerErrorMessage: string | null = null;
  registerForm = new FormGroup(
    {
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      passwordConfirm: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
    },
    { validators: passwordsMatch }
  );

  constructor(private authSrv: AuthService) {}

  ngOnInit(): void {}

  onSubmit() {
    let moment = require('moment');

    let firstname = this.registerForm.value.firstname;
    let lastname = this.registerForm.value.lastname;
    let email = this.registerForm.value.email;
    let password = this.registerForm.value.password;
    let dob = moment(this.registerForm.value.dob).format('YYYY/MM/DD');
    if (firstname && lastname && email && password && dob) {
      let formData: NewUser = {
        name: firstname,
        surname: lastname,
        email: email,
        password: password,
        dob: dob,
      };

      this.authSrv.register(formData).subscribe(
        (res) => console.log(res),
        (err) => (this.registerErrorMessage = err.error.message)
      );
    }
  }
}

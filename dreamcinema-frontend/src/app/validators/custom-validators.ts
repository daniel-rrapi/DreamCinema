import { AbstractControl } from '@angular/forms';

export function passwordsMatch(c: AbstractControl) {
  if (c.get('password')?.value !== c.get('passwordConfirm')?.value) {
    return { invalid: true };
  } else return null;
}

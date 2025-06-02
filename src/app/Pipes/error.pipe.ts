import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'error',
})
export class ErrorPipe implements PipeTransform {
  transform(
    errors: ValidationErrors | null | undefined,
    data: string
  ): string | null {
    if (!errors) {
      return null;
    } else if (errors['required']) {
      return `${data} is required`;
    } else if (errors['email']) {
      return 'Invalid email address';
    } else if (errors['tooShort']) {
      return `${data} must be of 8 characters`;
    } else if (errors['missingUpperCase']) {
      return 'Password must contain an uppercase letter.';
    } else if (errors['missingNumber']) {
      return 'Password must contain a number.';
    } else if (errors['missingSpecialChar']) {
      return 'Password must contain a special character.';
    } else if (errors['passwordMismatch']) {
      console.log(errors);
      return 'password do not match';
    } else if (errors['misssingCode']) {
      return 'The code should be only number';
    } else if (errors['codeshort']) {
      return 'code should be of atleast 6 characters';
    } else if (errors['checkEmail']) {
      return 'email already exists';
    } else {
      return null;
    }
  }
}

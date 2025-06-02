import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { EyeComponent } from '../../icons/eye';
import { GoogleComponent } from '../../AuthIcons/google.component';
import { AppleComponent } from '../../AuthIcons/apple.component';
import { RightIconComponent } from '../../AuthIcons/rightarrowicon.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { checkuserEmail, confirmpassword, minLengthValidator, numberValidator, specialCharValidator, uppercaseValidator } from '../../Validators/password.validator';
import { ErrorPipe } from "../../Pipes/error.pipe";
import { CommonModule } from '@angular/common';
import { EyeHideComponent } from "../../Bottomnavicon/eyehide.component";
import { AuthService } from '../../Services/userservice.service';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, RouterModule, EyeComponent, GoogleComponent, AppleComponent, RightIconComponent, ReactiveFormsModule, FormsModule, ErrorPipe, EyeHideComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  showPassword = false;
  showconfirm = false

  route: Router = inject(Router)

  onLogin() {
    this.route.navigate(['/login'])

  }


  authService: AuthService = inject(AuthService)

  signupForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email],checkuserEmail),
    password: new FormControl('', [Validators.required, minLengthValidator, uppercaseValidator, numberValidator, specialCharValidator]),
    confirmpassword: new FormControl('', Validators.required),
    check: new FormControl('', Validators.requiredTrue)

  }, { validators: confirmpassword })

  onSignup() {
    if (this.signupForm.invalid) return;

    const name: string = this.signupForm.get('name')?.value ?? '';
    const email: string = this.signupForm.get('email')?.value ?? '';
    const password: string = this.signupForm.get('password')?.value ?? '';
    const success = this.authService.signup({ name, email, password });


    if (success) {
      alert('Signup Successful')

      this.signupForm.reset();
    }

    else {
      alert('email already exists')
    }
  }

  get email() {
    return this.signupForm.get('email');
  }


  get password() {
    return this.signupForm.get('password')
  }

  get confirmpassword() {
    return this.signupForm.get('confirmpassword')
  }

  get name() {
    return this.signupForm.get('name')
  }
  get check() {
    return this, this.signupForm.get('check')
  }



}

import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { EyeComponent } from '../icons/eye';
import { RightIconComponent } from '../AuthIcons/rightarrowicon.component';
import { GoogleComponent } from '../AuthIcons/google.component';
import { AppleComponent } from '../AuthIcons/apple.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {  minLengthValidator, numberValidator, specialCharValidator, uppercaseValidator } from '../Validators/password.validator';
import { ErrorPipe } from "../Pipes/error.pipe";
import { EyeHideComponent } from '../Bottomnavicon/eyehide.component';
import { AuthService } from '../Services/userservice.service';

@Component({
  selector: 'app-auth',
  imports: [RouterModule, EyeHideComponent, EyeComponent, CommonModule, RightIconComponent, GoogleComponent, AppleComponent, FormsModule, ReactiveFormsModule, ErrorPipe],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  authService: AuthService = inject(AuthService)
  showPassword = false;

  route: Router = inject(Router)

  onclick() {
    this.route.navigate(['signup'])
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, minLengthValidator, uppercaseValidator, numberValidator, specialCharValidator])
  })

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    const email = this.loginForm.get('email')?.value ?? '';
    const password = this.loginForm.get('password')?.value ?? '';

    const isAuthenticated = this.authService.login(email, password);

    if (isAuthenticated) {
      alert('Login Successful')
      this.loginForm.reset();
      this.route.navigate(['/'])
    }
    else {
      alert('invalid user or password please try again')
    }

  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password')
  }
}

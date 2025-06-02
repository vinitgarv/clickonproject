import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { RightIconComponent } from '../../AuthIcons/rightarrowicon.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorPipe } from "../../Pipes/error.pipe";

@Component({
  selector: 'app-forgotpass',
  imports: [RouterModule, RightIconComponent, FormsModule, ReactiveFormsModule, ErrorPipe],
  templateUrl: './forgotpass.component.html',
  styleUrl: './forgotpass.component.css'
})
export class ForgotpassComponent {

  route: Router = inject(Router)

  onClick() {
    this.route.navigate(['/verify'])

  }

  resetForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])

  })

  onForgot() {
    console.log(this.resetForm)

  }

  get email() {
    return this.resetForm.get('email')
  }

}

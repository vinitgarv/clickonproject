import { Component, inject } from '@angular/core';
import { RightIconComponent } from '../../AuthIcons/rightarrowicon.component';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { codeLengthValidator, codeValidator } from '../../Validators/password.validator';
import { ErrorPipe } from "../../Pipes/error.pipe";

@Component({
  selector: 'app-verify',
  imports: [RightIconComponent, FormsModule, ReactiveFormsModule, ErrorPipe],
  templateUrl: './verify.component.html',
  styleUrl: './verify.component.css'
})
export class VerifyComponent {

  route: Router = inject(Router);

  onClick() {
    this.route.navigate(['/reset'])
  }
  onVerify() {
    console.log(this.verifyForm)

  }

  verifyForm = new FormGroup({
    code: new FormControl('', [Validators.required, codeValidator, codeLengthValidator])

  })

  get code() {
    return this.verifyForm.get('code')
  }

}

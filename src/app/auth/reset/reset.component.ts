import { Component } from '@angular/core';
import { EyeComponent } from '../../icons/eye';
import { RightIconComponent } from '../../AuthIcons/rightarrowicon.component';

@Component({
  selector: 'app-reset',
  imports: [EyeComponent, RightIconComponent],
  templateUrl: './reset.component.html',
  styleUrl: './reset.component.css'
})
export class ResetComponent {

}

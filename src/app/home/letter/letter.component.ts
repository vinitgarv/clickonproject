import { Component } from '@angular/core';
import { RightIconComponent } from '../../AuthIcons/rightarrowicon.component';
import { GoogleLogoComponent } from '../../lettericon/googlelogo.component';
import { AmazonLogoComponent } from '../../lettericon/amazonlogo.component';
import { ToshibaComponent } from '../../lettericon/toshiba.component';
import { PhilipsComponent } from '../../lettericon/philips.component';
import { SamsungComponent } from '../../lettericon/samsung.component';

@Component({
  selector: 'app-letter',
  imports: [RightIconComponent, GoogleLogoComponent, AmazonLogoComponent, ToshibaComponent, PhilipsComponent, SamsungComponent],
  templateUrl: './letter.component.html',
  styleUrl: './letter.component.css'
})
export class LetterComponent {

}

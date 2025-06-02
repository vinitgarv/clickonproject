import { Component } from '@angular/core';
import { TruckComponent } from "../../supporticons/truck.component";

import { HeadPhoneComponent } from '../../productdetauilicon/headphone.component';
import { HandComponent } from '../../productdetauilicon/hand.component';
import { MedalComponent } from '../../productdetauilicon/medal.component';
import { DebitComponent } from "../../productdetauilicon/debit.component";

@Component({
  selector: 'app-information',
  imports: [TruckComponent, HeadPhoneComponent, HandComponent, MedalComponent, DebitComponent],
  templateUrl: './information.component.html',
  styleUrl: './information.component.css'
})
export class InformationComponent {

}

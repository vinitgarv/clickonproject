import { Component } from '@angular/core';
import { PackageComponent } from '../../FeaureIcons/package.component';
import { VerticalLineComponent } from '../../FeaureIcons/verticalline.component';
import { CreditCardComponent } from '../../FeaureIcons/creditcard.component';
import { HeadphoneComponent } from '../../FeaureIcons/headphne.component';
import { TrophyComponent } from '../../FeaureIcons/trophy.component';

@Component({
  selector: 'app-feature',
  imports: [PackageComponent, VerticalLineComponent, CreditCardComponent, HeadphoneComponent, TrophyComponent],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.css'
})
export class FeatureComponent {

}

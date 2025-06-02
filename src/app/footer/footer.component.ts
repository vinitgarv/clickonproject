import { Component } from '@angular/core';
import { LogoIconComponent } from '../FooterIcon/logo.component';
import { AppleCardComponent } from '../FooterIcon/applecard.component';
import { YellowRightComponent } from '../FooterIcon/yellowright.component';
import { YellowLineComponent } from '../FooterIcon/yellowline.component';
import { PlaystoreComponent } from '../FooterIcon/playstore.component';

@Component({
  selector: 'app-footer',
  imports: [LogoIconComponent, AppleCardComponent, YellowRightComponent, YellowLineComponent, PlaystoreComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}

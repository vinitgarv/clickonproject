import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TrackIconComponent } from '../../Bottomnavicon/trackicon.component';
import { SupportIconComponent } from '../../Bottomnavicon/supporticon.component';
import { NeedIconComponent } from '../../Bottomnavicon/needicon.component';
import { CompareIconComponent } from '../../Bottomnavicon/compareicon.component';
import { PhoneIconComponent } from '../../Bottomnavicon/phoneicon.component';
import { DownArrowComponent } from '../../Bottomnavicon/downarrow.component';

@Component({
  selector: 'app-bottomnav',
  imports: [RouterModule, DownArrowComponent, TrackIconComponent, SupportIconComponent, NeedIconComponent, CompareIconComponent, PhoneIconComponent],
  templateUrl: './bottomnav.component.html',
  styleUrl: './bottomnav.component.css'
})
export class BottomnavComponent {

}

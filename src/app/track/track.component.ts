import { Component, inject } from '@angular/core';
import { NeedIconComponent } from '../Bottomnavicon/needicon.component';
import { RightIconComponent } from '../AuthIcons/rightarrowicon.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-track',
  imports: [NeedIconComponent, RightIconComponent],
  templateUrl: './track.component.html',
  styleUrl: './track.component.css'
})
export class TrackComponent {

  route: Router = inject(Router)

  onClick() {
    this.route.navigate(['/trackdetail'])
  }
}

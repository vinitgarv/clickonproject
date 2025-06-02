import { Component } from '@angular/core';
import { TrackComponent } from '../../track/track.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { SidebuttonComponent } from '../../sidebutton/sidebutton.component';

@Component({
  selector: 'app-track-order',
  imports: [SidebarComponent, TrackComponent, SidebuttonComponent],
  templateUrl: './track-order.component.html',
  styleUrl: './track-order.component.css'
})
export class TrackOrderComponent {

}

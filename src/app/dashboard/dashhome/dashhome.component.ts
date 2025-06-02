import { Component } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { IconsComponent } from '../../icons/icons.component';
import { SidebuttonComponent } from '../../sidebutton/sidebutton.component';

@Component({
  selector: 'app-dashhome',
  imports: [SidebarComponent, IconsComponent, SidebuttonComponent],
  templateUrl: './dashhome.component.html',
  styleUrl: './dashhome.component.css'
})
export class DashhomeComponent {

}

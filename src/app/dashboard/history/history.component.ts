import { Component } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { IconsComponent } from '../../icons/icons.component';
import { LeftArrowComponent } from '../../icons/leftarrow.component';
import { RightArrowComponent } from '../../icons/righarrow.component';
import { SidebuttonComponent } from '../../sidebutton/sidebutton.component';

@Component({
  selector: 'app-history',
  imports: [SidebarComponent, IconsComponent, LeftArrowComponent, RightArrowComponent, SidebuttonComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {

}

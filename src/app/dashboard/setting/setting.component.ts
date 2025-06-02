import { Component } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { SaveButtonComponent } from '../../icons/savebutton';
import { SidebuttonComponent } from '../../sidebutton/sidebutton.component';

@Component({
  selector: 'app-setting',
  imports: [SidebarComponent, SaveButtonComponent, SidebuttonComponent],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css'
})
export class SettingComponent {

}

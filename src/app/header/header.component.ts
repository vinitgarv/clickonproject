import { Component } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { TopnavComponent } from './topnav/topnav.component';
import { MiddlenavbarComponent } from './middlenavbar/middlenavbar.component';
import { BottomnavComponent } from './bottomnav/bottomnav.component';


@Component({
  selector: 'app-header',
  imports: [TopnavComponent,MiddlenavbarComponent,BottomnavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}

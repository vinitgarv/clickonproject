import { Component } from '@angular/core';
import { HamburgerComponent } from '../SocialIcons/hamburger.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarHomeComponent } from '../Sidebaricons/sidebarhome.component';
import { SidebarOrderComponent } from '../Sidebaricons/sidebarorder.component';
import { SidebarTrackComponent } from '../Sidebaricons/sidebartrack.component';
import { SidebarCartComponent } from '../Sidebaricons/sidebarcart.component';
import { SidebarWishlistComponent } from '../Sidebaricons/sidebarwish.component';
import { SidebarCompareComponent } from '../Sidebaricons/sidebarcompare.component';
import { SidebarCardComponent } from '../Sidebaricons/sidebarcard.component';
import { SidebarHistoryComponent } from '../Sidebaricons/sidebarhistory.component';
import { SidebarSettingComponent } from '../Sidebaricons/sidebarsetting.component';
import { SidebarLogoutComponent } from '../Sidebaricons/sidebarlogout.component';

@Component({
  selector: 'app-sidebutton',
  imports: [HamburgerComponent, RouterModule, CommonModule, SidebarHomeComponent, SidebarOrderComponent, SidebarTrackComponent, SidebarCartComponent, SidebarWishlistComponent, SidebarCompareComponent, SidebarCardComponent, SidebarHistoryComponent, SidebarSettingComponent, SidebarLogoutComponent],
  templateUrl: './sidebutton.component.html',
  styleUrl: './sidebutton.component.css'
})
export class SidebuttonComponent {




  menuOpen = false;

  toggleMenu() {

    this.menuOpen = !this.menuOpen;
  }


}

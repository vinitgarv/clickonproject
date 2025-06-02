import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

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
import { AuthService } from '../Services/userservice.service';


@Component({
  selector: 'app-sidebar',
  imports: [RouterModule, CommonModule, SidebarHomeComponent, SidebarOrderComponent, SidebarTrackComponent, SidebarCartComponent, SidebarWishlistComponent, SidebarCompareComponent, SidebarCardComponent, SidebarHistoryComponent, SidebarSettingComponent, SidebarLogoutComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  route: Router = inject(Router)

  authService: AuthService = inject(AuthService)
  onLogout() {
    this.authService.logout();
    this.route.navigate(['/login'])
  }

}

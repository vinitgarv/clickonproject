import { Component, inject } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { Router } from '@angular/router';
import { SidebuttonComponent } from '../../sidebutton/sidebutton.component';

import { MatDialog } from '@angular/material/dialog';
import { AddcardComponent } from '../../Forms/addcard/addcard.component';



@Component({
  selector: 'app-card',
  imports: [SidebarComponent, SidebuttonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  route: Router = inject(Router);
  onClick() {
    this.route.navigate(['addcard'])

  }

  constructor(private dialog: MatDialog) { }

  openDialog(): void {
    this.dialog.open(AddcardComponent, {
      width: '400px'
    });
  }

}

import { Component } from '@angular/core';
import { CreditIconComponent } from '../../supporticons/crediticon.component';
import { LockComponent } from '../../supporticons/lock.component';
import { NotePadComponent } from '../../supporticons/notepad.component';
import { StackComponent } from '../../supporticons/stack.component';
import { TruckComponent } from '../../supporticons/truck.component';
import { StoreComponent } from '../../supporticons/store.component';
import { UserProfileIconComponent } from '../../supporticons/userprofileicon.component';

@Component({
  selector: 'app-supportcontent',
  imports: [CreditIconComponent, LockComponent, NotePadComponent, StackComponent, TruckComponent, StoreComponent, UserProfileIconComponent],
  templateUrl: './supportcontent.component.html',
  styleUrl: './supportcontent.component.css'
})
export class SupportcontentComponent {

}

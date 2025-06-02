import { Component } from '@angular/core';
import { LatestRightComponent } from '../../latestnewsicon/latestright.component';
import { UserCircleComponent } from '../../latestnewsicon/usercircle.component';
import { CelenderComponent } from '../../latestnewsicon/celender.component';
import { ChatComponent } from '../../latestnewsicon/chat.component';

@Component({
  selector: 'app-latestnews',
  imports: [LatestRightComponent, UserCircleComponent, CelenderComponent, ChatComponent],
  templateUrl: './latestnews.component.html',
  styleUrl: './latestnews.component.css'
})
export class LatestnewsComponent {

}

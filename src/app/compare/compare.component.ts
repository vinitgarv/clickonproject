import { Component } from '@angular/core';
import { ClosedComponent } from '../categoryicon/close.component';
import { LikeIconComponent } from '../FooterIcon/likeicon.component';
import { BasketComponent } from '../FooterIcon/basket.component';
import { StarFillComponent } from '../FooterIcon/starfill.component';

@Component({
  selector: 'app-compare',
  imports: [ClosedComponent, LikeIconComponent, BasketComponent, StarFillComponent],
  templateUrl: './compare.component.html',
  styleUrl: './compare.component.css'
})
export class CompareComponent {

}

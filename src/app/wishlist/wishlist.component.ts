import { Component } from '@angular/core';
import { ClosedComponent } from '../categoryicon/close.component';
import { BasketComponent } from '../FooterIcon/basket.component';

@Component({
  selector: 'app-wishlistc',
  imports: [ClosedComponent, BasketComponent],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {

}

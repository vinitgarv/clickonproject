import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { CrossComponent } from '../icons/cross';
import { MinusComponent } from '../icons/minus';
import { PlusComponent } from '../icons/plus';
import { LeftIconComponent } from '../icons/lefticon';
import { RightArrowWhiteComponent } from '../icons/rightarrowwhite';
import { Router, RouterConfigOptions } from '@angular/router';
import { CartService } from '../Services/cart.service';
import { CartTotalPipe } from "../Pipes/price.pipe";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    CrossComponent,
    MinusComponent,
    PlusComponent,
    LeftIconComponent,
    RightArrowWhiteComponent,
    CartTotalPipe
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  product: any[] = [];
  route: Router = inject(Router)
  constructor(private cartService: CartService) { }
  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.product = items;
    });
  }
  onplus(prod: any) {
    if (prod.quantity >= 5) {
      return;
    }
    this.cartService.updateQuantity(prod.id, prod.quantity + 1);
  }
  onMinus(prod: any) {
    if (prod.quantity > 1) {
      this.cartService.updateQuantity(prod.id, prod.quantity - 1);
    } else {
      this.cartService.removeFromCart(prod.id);
    }
  }
  onClick() {
    if (this.product.length <= 0) {
      return;
    }
    this.route.navigate(['/checkout'])
  }

  removeItem(id:number) {
    this.cartService.removeFromCart(id)

  }
}

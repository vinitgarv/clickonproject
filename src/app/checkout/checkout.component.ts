import { Component, inject } from '@angular/core';
import { TickComponent } from '../CurrecyIcons/Tick.component';
import { DolarComponent } from '../CurrecyIcons/dolar.component';
import { HorizontalComponent } from '../CurrecyIcons/horizontal.component';
import { venmoComponent } from '../CurrecyIcons/venmo.component';
import { AmazonpayComponent } from '../CurrecyIcons/amazonpay.component';
import { paypalComponent } from '../CurrecyIcons/paypal.component';
import { CreditDebitComponent } from '../CurrecyIcons/creditdebit.component';
import { CrossComponent } from '../icons/cross';
import { RightIconComponent } from '../AuthIcons/rightarrowicon.component';
import { MatSelectModule } from '@angular/material/select'
import { Router } from '@angular/router';
import { CartService } from '../Services/cart.service';
import { CommonModule } from '@angular/common';
import { CartTotalPipe } from "../Pipes/price.pipe";

@Component({
  selector: 'app-checkout',
  imports: [TickComponent, CommonModule, DolarComponent, MatSelectModule, RightIconComponent, HorizontalComponent, venmoComponent, AmazonpayComponent, CrossComponent, paypalComponent, CreditDebitComponent, CartTotalPipe],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {


  route: Router = inject(Router)



  product: any[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.product = items;
    });
  }

  onClick() {
    this.route.navigate(['/checkoutconfirm'])
    alert('order Successfully placed')
  }
}

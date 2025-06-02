import { Component, inject, OnInit } from '@angular/core';
import { BlueRightComponent } from '../../FooterIcon/blueright.component';
import { LikeIconComponent } from '../../FooterIcon/likeicon.component';
import { BasketComponent } from '../../FooterIcon/basket.component';
import { StarFillComponent } from '../../FooterIcon/starfill.component';
import { Router, RouterModule } from '@angular/router';
import { ProductService } from '../../Services/product.service';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-bestdeals',
  imports: [BlueRightComponent, LikeIconComponent, BasketComponent, StarFillComponent,RouterModule],
  templateUrl: './bestdeals.component.html',
  styleUrl: './bestdeals.component.css'
})
export class BestdealsComponent{

productService:ProductService = inject(ProductService);

  products=  this.productService.getBestDeals();
   


}


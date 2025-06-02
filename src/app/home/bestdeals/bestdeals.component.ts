import { Component, inject, OnInit } from '@angular/core';
import { BlueRightComponent } from '../../FooterIcon/blueright.component';
import { LikeIconComponent } from '../../FooterIcon/likeicon.component';
import { BasketComponent } from '../../FooterIcon/basket.component';
import { StarFillComponent } from '../../FooterIcon/starfill.component';
import { Router } from '@angular/router';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-bestdeals',
  imports: [BlueRightComponent, LikeIconComponent, BasketComponent, StarFillComponent],
  templateUrl: './bestdeals.component.html',
  styleUrl: './bestdeals.component.css'
})
export class BestdealsComponent{

  route: Router = inject(Router);

  onClick() {

    this.route.navigate(['/productdetail'])
  }
productService:ProductService = inject(ProductService);

  products:any[] =  this.productService.getBestDeals();
  





}


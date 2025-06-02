import { Component, inject, Input } from '@angular/core';
import { CatLeftComponent } from '../../categoryicon/catleft.component';
import { CatRightComponent } from '../../categoryicon/catright.component';
import { StarFillComponent } from '../../FooterIcon/starfill.component';
import { MinusComponent } from '../../icons/minus';
import { PlusComponent } from '../../icons/plus';
import { BasketComponent } from '../../FooterIcon/basket.component';
import { CompareIconComponent } from '../../Bottomnavicon/compareicon.component';
import { TrackIconComponent } from '../../Bottomnavicon/trackicon.component';
import { TwitterComponent } from '../../SocialIcons/twitter.component';
import { RedditComponent } from '../../SocialIcons/reddit.component';
import { FacebookComponent } from '../../SocialIcons/facebook.component copy';
import { PinterestComponent } from '../../SocialIcons/pinterest.component';
import { ProductService } from '../../Services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../Services/cart.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-overview',
  imports: [CatLeftComponent, CatRightComponent,
    StarFillComponent, MinusComponent, PlusComponent, CompareIconComponent, BasketComponent, TrackIconComponent
    , TwitterComponent, RedditComponent, FacebookComponent, PinterestComponent,CommonModule],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {


  @Input() product:any;
  quantity:number=1;
  
  router:ActivatedRoute = inject(ActivatedRoute);
  route:Router =inject(Router)
  productService:ProductService = inject(ProductService);
  cartService:CartService = inject(CartService)

  products:any = this.productService.getAllProducts();

  ngOnInit() {
    const id = Number(this.router.snapshot.paramMap.get('id'));

    this.product = this.productService.getProductById(id);
  }
  addToCart() {
    const productToAdd = { ...this.product, quantity: this.quantity };
    this.cartService.addToCart(productToAdd);
  }



goToCart() {
  this.route.navigate(['/cart'])


}
   onPlus() {
    this.quantity++;
  }

  onMinus() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  isInCart(): boolean {
    return this.cartService.isInCart(this.product.id);
  }

  onBuy() {
    this.addToCart();
    this.route.navigate(['/checkout'])
  }
 

}

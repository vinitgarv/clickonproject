import { Component, inject } from '@angular/core';
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


@Component({
  selector: 'app-overview',
  imports: [CatLeftComponent, CatRightComponent,
    StarFillComponent, MinusComponent, PlusComponent, CompareIconComponent, BasketComponent, TrackIconComponent
    , TwitterComponent, RedditComponent, FacebookComponent, PinterestComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {

  productService:ProductService = inject(ProductService);
  product:any[]= this.productService.getAllProducts();

}

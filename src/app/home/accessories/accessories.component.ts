import { Component, inject } from '@angular/core';
import { LatestRightComponent } from '../../latestnewsicon/latestright.component';
import { StarFillComponent } from '../../FooterIcon/starfill.component';
import { StarBlankComponent } from '../../FooterIcon/starblank.component';
import { RightIconComponent } from '../../AuthIcons/rightarrowicon.component';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-accessories',
  imports: [LatestRightComponent, StarFillComponent, StarBlankComponent, RightIconComponent],
  templateUrl: './accessories.component.html',
  styleUrl: './accessories.component.css'
})
export class AccessoriesComponent {
  productService:ProductService = inject(ProductService)

  products:any[]  = this.productService.getacc();

}
import { Component, inject, OnInit } from '@angular/core';
import { RightIconComponent } from '../../AuthIcons/rightarrowicon.component';
import { RightArrowComponent } from '../../icons/righarrow.component';
import { StarFillComponent } from '../../FooterIcon/starfill.component';
import { ProductService } from '../../Services/product.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [RightIconComponent, RightArrowComponent, StarFillComponent,RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
    productService:ProductService = inject(ProductService)

  products:any[] = this.productService.getFeaturedProducts();

}


import { Component } from '@angular/core';

import { AccessoriesComponent } from './accessories/accessories.component';
import { BannerComponent } from './banner/banner.component';
import { BestdealsComponent } from './bestdeals/bestdeals.component';
import { CategoryComponent } from './category/category.component';
import { LatestnewsComponent } from './latestnews/latestnews.component';
import { LetterComponent } from './letter/letter.component';
import { PosterComponent } from './poster/poster.component';
import { ProductcategoryComponent } from './productcategory/productcategory.component';
import { ProductsComponent } from './products/products.component';
import { WidgetComponent } from './widget/widget.component';
import { FeatureComponent } from './feature/feature.component';

@Component({
  selector: 'app-home',
  imports: [WidgetComponent,FeatureComponent,AccessoriesComponent,BannerComponent,BestdealsComponent,CategoryComponent,LatestnewsComponent,LetterComponent,PosterComponent,ProductcategoryComponent,ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

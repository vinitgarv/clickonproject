import { Component } from '@angular/core';
import { OverviewComponent } from './overview/overview.component';
import { InformationComponent } from './information/information.component';

import { ProductcategoryComponent } from '../home/productcategory/productcategory.component';



@Component({
  selector: 'app-productdetail',
  imports: [OverviewComponent, InformationComponent, ProductcategoryComponent],
  templateUrl: './productdetail.component.html',
  styleUrl: './productdetail.component.css'
})
export class ProductdetailComponent  {

}

import { Component, inject } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-searchlist',
  imports: [CommonModule],
  templateUrl: './searchlist.component.html',
  styleUrl: './searchlist.component.css'
})
export class SearchlistComponent {
  productService:ProductService = inject(ProductService)
  route:ActivatedRoute = inject(ActivatedRoute);
  router:Router = inject(Router);
  query: string = '';
  results: any[] = [];

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.query = params['q'] || '';
      this.results = this.productService.searchProducts(this.query);
    });
  }
  onClick(product:any)  {
     this.router.navigate(['/product', product.id]);
  }

}

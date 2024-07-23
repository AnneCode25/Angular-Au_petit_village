import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService, Product } from '../product.service';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  providers: [ProductService],
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  product$: Observable<Product | undefined> = of(undefined);

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.product$ = this.productService.getProductById(+productId);
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }
}

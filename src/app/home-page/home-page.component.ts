import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductService, Product } from '../product.service';
import { FilterByNamePipe } from '../filter-by-name.pipe';
import { SortByPricePipe } from '../sort-by-price.pipe';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, FilterByNamePipe, SortByPricePipe, FormsModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
CompanyName='Au petit village';
CompanyShortDescription='Au petit village est une entreprise qui confectionne des figurines inspirées de la bande dessinée Astérix et Obélix.'
products: Product[] = [];
searchText: string='';
sortOrder: string='asc';

constructor(private productService: ProductService) { }

ngOnInit() {
  this.productService.getProducts().subscribe(products => this.products = products);
}

}

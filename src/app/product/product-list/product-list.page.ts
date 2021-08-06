import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {
  products = this.productService.getProductsData();
  filterProduct = '';

  constructor(private productService: ProductService) {}

  ngOnInit() {}

  onSearchChange() {
    console.log(this.filterProduct);
  }
}

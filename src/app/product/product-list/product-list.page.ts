import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {
  products = this.productService.getProductsData();
  filterProduct = '';
  md = false;
  hiddenFab = true;

  constructor(
    private productService: ProductService,
    private platform: Platform
  ) {}

  ngOnInit() {
    this.md = this.platform.is('android');
  }

  onSearchChange() {
    console.log(this.filterProduct);
  }

  logScrollEnd() {
    this.hiddenFab = true;
  }
  logScrollStart() {
    this.hiddenFab = false;
  }
}

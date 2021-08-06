import { Component, OnInit } from '@angular/core';
import { ProductCart } from '../product/models/product.class';
import { CartOrder } from './models/cart.class';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage {
  productsCart = this.cartService.cart;
  order: CartOrder;

  constructor(private cartService: CartService) {}

  ionViewDidEnter() {
    console.log('object');
    this.order = new CartOrder(this.productsCart);
    this.order.calculateTotal();
    console.log(this.order);
  }

  removeProduct(product: ProductCart) {}
}

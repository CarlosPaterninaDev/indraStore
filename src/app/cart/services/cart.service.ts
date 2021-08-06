import { EventEmitter, Injectable, Output } from '@angular/core';
import { ProductCart } from 'src/app/product/models/product.class';
import { CartOrder } from '../models/cart.class';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: ProductCart[] = [];
  order: CartOrder;

  @Output() productToCart: EventEmitter<ProductCart> =
    new EventEmitter<ProductCart>();

  constructor() {}

  addProductToCart(product: ProductCart) {
    this.cart.push(product);
  }
}

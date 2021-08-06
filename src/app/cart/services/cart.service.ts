import { EventEmitter, Injectable, Output } from '@angular/core';
import { ProductCart } from 'src/app/product/models/product.class';
import { CartOrder } from '../models/cart.class';
import { Order } from '../models/order.class';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: ProductCart[] = [];
  order: CartOrder;
  orders: Order[] = [];

  @Output() productToCart: EventEmitter<ProductCart> =
    new EventEmitter<ProductCart>();

  constructor() {}

  addProductToCart(product: ProductCart) {
    this.cart.push(product);
    this.productToCart.emit(product);
  }

  historyOrders(order: Order) {
    this.orders.push(order);
  }
}

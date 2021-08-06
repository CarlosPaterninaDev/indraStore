import { CartOrder } from './cart.class';
import { ProductCart } from '../../product/models/product.class';

export class Order {
  products: ProductCart[];
  total: number;
  idOrder: number;

  constructor(orderCart: CartOrder) {
    this.idOrder = Date.now();
    this.products = orderCart.products;
    this.total = orderCart.total;
  }
}

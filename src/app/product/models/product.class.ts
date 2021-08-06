import { Product } from '../models/product.interface';

export class ProductCart {
  id: number;
  name: string;
  price: number;
  description: number;
  img: string;
  quantity: number;
  total: number;

  constructor(product: Product) {
    this.id = product.id;
    this.name = product.name;
    this.price = product.price;
    this.img = product.img;
    this.quantity = 0;
  }

  calculateTotal() {
    this.total = this.quantity * this.price;
  }
}

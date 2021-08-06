import { ProductCart } from 'src/app/product/models/product.class';

export class CartOrder {
  products: ProductCart[];
  total: number;

  constructor(products: ProductCart[]) {
    this.products = products;
    this.total = this.calculateTotal();
  }

  calculateTotal() {
    let total = 0;

    this.products.forEach((e) => {
      total += e.total;
    });

    this.total;

    return total;
  }

  recalculateTotal(products: ProductCart[]) {
    let total = 0;

    this.products.forEach((e) => {
      total += e.total;
    });

    this.total = total;
  }
}

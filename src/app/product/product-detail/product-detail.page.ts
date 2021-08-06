import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductService } from '../services/product.service';

import { ProductCart } from '../models/product.class';
import { CartService } from '../../cart/services/cart.service';
import { NavController } from '@ionic/angular';
import { UiService } from '../../shared/services/ui.service';
import { ADD_PRODUCTO, ADD_SUCCESFUL } from 'src/app/constant/ui.message';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  isFavorite = true;
  product: ProductCart;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private navController: NavController,
    private uiService: UiService
  ) {}

  ngOnInit() {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.productService.getProductsById(id)))
      .subscribe((product) => {
        this.product = new ProductCart(product);
      });
  }

  onHandleQuantity(quantity: number) {
    if (this.product.quantity < 0) {
      this.product.quantity = 0;
    } else {
      this.product.quantity = this.product.quantity + quantity;
      this.product.calculateTotal();
    }
  }

  async addCart() {
    this.cartService.addProductToCart(this.product);

    await this.uiService.presentLoading(ADD_PRODUCTO).then((e) => {
      setTimeout(() => {
        this.uiService.presentToast(ADD_SUCCESFUL, 'success');
        this.navController.back();
        this.uiService.loading.dismiss();
      }, 1500);
    });
  }

  toggleFavorite() {}

  socialShare() {}
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductCart } from '../product/models/product.class';
import { CartOrder } from './models/cart.class';
import { CartService } from './services/cart.service';
import { UiService } from '../shared/services/ui.service';
import {
  CONFIRM_PAY,
  CONFIRM_PAY_SUB,
  CONFIRM_DELETE_SUB,
  CONFIRM_DELETE,
  PAY_SUCCESFUL,
} from '../constant/ui.message';
import { IonList } from '@ionic/angular';
import { PAY_LOADING } from '../constant/ui.message';
import { Order } from './models/order.class';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage {
  @ViewChild('list') ionList: IonList;
  productsCart = this.cartService.cart;
  order: CartOrder;
  showButtonPay = true;
  noOrder: number;

  constructor(private cartService: CartService, private uiService: UiService) {}

  ionViewDidEnter() {
    this.order = new CartOrder(this.productsCart);
    this.order.calculateTotal();
  }

  async removeProduct(index: number) {
    const resp = await this.uiService.alertConfirm(
      CONFIRM_DELETE,
      CONFIRM_DELETE_SUB
    );

    if (resp) {
      this.productsCart.splice(index, 1);
      this.ionList.closeSlidingItems().then((e) => {
        this.order.recalculateTotal(this.productsCart);

        this.cartService.productToCart.emit();
      });
    }
  }

  async pay() {
    const resp = await this.uiService.alertConfirm(
      CONFIRM_PAY,
      CONFIRM_PAY_SUB
    );

    if (resp) {
      await this.uiService.presentLoading(PAY_LOADING).then((e) => {
        setTimeout(() => {
          this.newOrder();

          this.uiService.presentToast(PAY_SUCCESFUL, 'success', 2000);
          this.showButtonPay = false;
          this.uiService.loading.dismiss();
        }, 1500);
      });
    }
  }

  newOrder() {
    const newOrder = new Order(this.order);
    this.noOrder = newOrder.idOrder;
    this.cartService.historyOrders(newOrder);
  }

  ionViewDidLeave() {
    if (this.noOrder) {
      this.cartService.cart = [];
      this.cartService.productToCart.emit();
    }
  }
}

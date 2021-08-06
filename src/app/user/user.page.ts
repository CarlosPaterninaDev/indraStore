import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Order } from '../cart/models/order.class';
import { CartService } from '../cart/services/cart.service';
import { HistoryDetailComponent } from './components/history-detail/history-detail.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  historyOrder: Order[] = [];

  constructor(
    private cartService: CartService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.historyOrder = this.cartService.orders;
  }

  ionViewDidEnter() {
    this.historyOrder = this.cartService.orders;
  }

  async showHistory(productOrder) {
    const modal = await this.modalController.create({
      component: HistoryDetailComponent,
      componentProps: { productOrder },
    });

    await modal.present();
  }
}

import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-fab-cart',
  template: `<ion-fab
    class="animate__animated animate__pulse"
    [class.animate__infinite]="cart"
    vertical="bottom"
    horizontal="end"
  >
    <ion-fab-button routerLink="/cart">
      <ion-icon name="cart"></ion-icon>
      <ion-text color="light"> {{ cart }}</ion-text>
    </ion-fab-button>
  </ion-fab>`,
})
export class FabCartComponent implements OnInit {
  cart = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.productToCart.subscribe((e) => {
      this.cart += 1;
    });
  }
}

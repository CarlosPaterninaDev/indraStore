import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-fab-cart',
  template: `<ion-fab
    [ngClass]="{ ocultarHeader: !hidden }"
    *ngIf="cartCounter"
    [class.animate__infinite]="cartCounter"
    vertical="bottom"
    horizontal="end"
  >
    <ion-fab-button routerLink="/cart">
      <ion-icon name="cart"></ion-icon>
      <ion-text color="light"> {{ cartCounter }}</ion-text>
    </ion-fab-button>
  </ion-fab>`,
  styles: [
    `
      ion-fab {
        transition: all 0.5s;
        transform: translateY(0%);
      }

      .ocultarHeader {
        transition: all 0.5s;
        animation: ease-in-out 0.5s;
        transform: translateY(1000%);
      }
    `,
  ],
})
export class FabCartComponent implements OnInit {
  cartCounter = 0;
  @Input() hidden = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    console.log('fab');
    this.cartService.productToCart.subscribe((e) => {
      this.cartCounter = this.cartService.cart.length;
    });

    this.cartCounter = this.cartService.cart.length;
  }
}

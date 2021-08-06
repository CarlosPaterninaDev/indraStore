import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}
}

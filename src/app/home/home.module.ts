import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CartPageModule } from '../cart/cart.module';
import { DomSanitizerPipe } from './pipe/dom-sanitizer.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    CartPageModule,
  ],
  declarations: [HomePage, DomSanitizerPipe],
})
export class HomePageModule {}

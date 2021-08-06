import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductListPageRoutingModule } from './product-list-routing.module';

import { ProductListPage } from './product-list.page';
import { CartPageModule } from '../../cart/cart.module';
import { FilterPipe } from '../pipe/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductListPageRoutingModule,
    CartPageModule,
  ],
  declarations: [ProductListPage, FilterPipe],
})
export class ProductListPageModule {}

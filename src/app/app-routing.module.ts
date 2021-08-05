import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  // {
  //   path: 'product-list',
  //   loadChildren: () => import('./product/product-list/product-list.module').then( m => m.ProductListPageModule)
  // },
  // {
  //   path: 'user',
  //   loadChildren: () => import('./user/user/user.module').then( m => m.UserPageModule)
  // },
  // {
  //   path: 'cart',
  //   loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  // },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

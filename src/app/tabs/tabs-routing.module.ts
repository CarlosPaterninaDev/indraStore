import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'products',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../product/product-list/product-list.module').then(
                (m) => m.ProductListPageModule
              ),
          },
          {
            path: 'detail/:id',
            loadChildren: () =>
              import('../product/product-detail/product-detail.module').then(
                (m) => m.ProductDetailPageModule
              ),
          },
        ],
      },
      {
        path: 'user',
        loadChildren: () =>
          import('../user/user.module').then((m) => m.UserPageModule),
      },

      {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('../cart/cart.module').then((m) => m.CartPageModule),
  },
  {
    path: '**',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}

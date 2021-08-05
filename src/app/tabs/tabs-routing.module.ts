import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('../product/product-list/product-list.module').then(
            (m) => m.ProductListPageModule
          ),
      },
      {
        path: 'user',
        loadChildren: () =>
          import('../user/user.module').then((m) => m.UserPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}

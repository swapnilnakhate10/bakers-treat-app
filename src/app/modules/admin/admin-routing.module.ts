import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReviewOrderComponent } from './dashboard/review-order/review-order.component';
import { MenuConfigComponent } from './menu-config/menu-config.component';
import { OrderHistoryComponent } from './order-history/order-history.component';

const routes: Routes = [
  { 
    path: '', 
    component: AdminComponent,
    children : [
      {
        path :'',
        redirectTo : 'dashboard',
        pathMatch: 'full'
      },
      {
        path : 'dashboard',
        component: DashboardComponent 
      },
      {
        path: 'review-order/:tableId',
        component: ReviewOrderComponent
      },
      {
        path: 'order-history',
        component: OrderHistoryComponent
      },
      {
        path: 'menu-setting',
        component: MenuConfigComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

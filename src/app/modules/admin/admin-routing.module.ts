import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReviewOrderComponent } from './dashboard/review-order/review-order.component';

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
      } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

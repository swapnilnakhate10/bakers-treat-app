import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReviewOrderComponent } from './dashboard/review-order/review-order.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    DashboardComponent,
    ReviewOrderComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

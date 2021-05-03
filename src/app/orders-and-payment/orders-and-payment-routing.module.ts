import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersAndPaymentPage } from './orders-and-payment.page';

const routes: Routes = [
  {
    path: '',
    component: OrdersAndPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersAndPaymentPageRoutingModule {}

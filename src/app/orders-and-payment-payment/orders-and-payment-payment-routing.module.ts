import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersAndPaymentPaymentPage } from './orders-and-payment-payment.page';

const routes: Routes = [
  {
    path: '',
    component: OrdersAndPaymentPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersAndPaymentPaymentPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentsAndOrderPage } from './payments-and-order.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentsAndOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentsAndOrderPageRoutingModule {}

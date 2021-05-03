import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentsAndOrderPageRoutingModule } from './payments-and-order-routing.module';

import { PaymentsAndOrderPage } from './payments-and-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentsAndOrderPageRoutingModule
  ],
  declarations: [PaymentsAndOrderPage]
})
export class PaymentsAndOrderPageModule {}

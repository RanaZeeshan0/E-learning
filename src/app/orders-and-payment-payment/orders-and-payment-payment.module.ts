import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdersAndPaymentPaymentPageRoutingModule } from './orders-and-payment-payment-routing.module';

import { OrdersAndPaymentPaymentPage } from './orders-and-payment-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdersAndPaymentPaymentPageRoutingModule
  ],
  declarations: [OrdersAndPaymentPaymentPage]
})
export class OrdersAndPaymentPaymentPageModule {}

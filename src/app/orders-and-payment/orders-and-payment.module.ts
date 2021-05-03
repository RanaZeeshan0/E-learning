import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdersAndPaymentPageRoutingModule } from './orders-and-payment-routing.module';

import { OrdersAndPaymentPage } from './orders-and-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdersAndPaymentPageRoutingModule
  ],
  declarations: [OrdersAndPaymentPage]
})
export class OrdersAndPaymentPageModule {}

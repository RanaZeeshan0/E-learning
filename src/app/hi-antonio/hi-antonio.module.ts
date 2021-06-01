import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HiAntonioPageRoutingModule } from './hi-antonio-routing.module';

import { HiAntonioPage } from './hi-antonio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HiAntonioPageRoutingModule
  ],
  declarations: [HiAntonioPage]
})
export class HiAntonioPageModule {}

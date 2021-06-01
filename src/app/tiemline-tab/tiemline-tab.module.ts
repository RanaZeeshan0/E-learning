import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TiemlineTabPageRoutingModule } from './tiemline-tab-routing.module';

import { TiemlineTabPage } from './tiemline-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TiemlineTabPageRoutingModule
  ],
  declarations: [TiemlineTabPage]
})
export class TiemlineTabPageModule {}

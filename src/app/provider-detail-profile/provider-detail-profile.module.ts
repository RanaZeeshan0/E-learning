import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProviderDetailProfilePageRoutingModule } from './provider-detail-profile-routing.module';

import { ProviderDetailProfilePage } from './provider-detail-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProviderDetailProfilePageRoutingModule
  ],
  declarations: [ProviderDetailProfilePage]
})
export class ProviderDetailProfilePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProviderDetailCommunityPageRoutingModule } from './provider-detail-community-routing.module';

import { ProviderDetailCommunityPage } from './provider-detail-community.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProviderDetailCommunityPageRoutingModule
  ],
  declarations: [ProviderDetailCommunityPage]
})
export class ProviderDetailCommunityPageModule {}

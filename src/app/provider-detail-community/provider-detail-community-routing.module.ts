import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProviderDetailCommunityPage } from './provider-detail-community.page';

const routes: Routes = [
  {
    path: '',
    component: ProviderDetailCommunityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProviderDetailCommunityPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProviderDetailProfilePage } from './provider-detail-profile.page';

const routes: Routes = [
  {
    path: '',
    component: ProviderDetailProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProviderDetailProfilePageRoutingModule {}

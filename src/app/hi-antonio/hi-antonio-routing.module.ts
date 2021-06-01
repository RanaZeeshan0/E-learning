import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HiAntonioPage } from './hi-antonio.page';

const routes: Routes = [
  {
    path: '',
    component: HiAntonioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HiAntonioPageRoutingModule {}

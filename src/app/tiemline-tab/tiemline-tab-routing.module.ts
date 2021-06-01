import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TiemlineTabPage } from './tiemline-tab.page';

const routes: Routes = [
  {
    path: '',
    component: TiemlineTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiemlineTabPageRoutingModule {}

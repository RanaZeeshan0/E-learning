import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoEnhancmentPage } from './video-enhancment.page';

const routes: Routes = [
  {
    path: '',
    component: VideoEnhancmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoEnhancmentPageRoutingModule {}

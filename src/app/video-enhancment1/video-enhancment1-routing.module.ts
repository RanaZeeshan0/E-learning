import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoEnhancment1Page } from './video-enhancment1.page';

const routes: Routes = [
  {
    path: '',
    component: VideoEnhancment1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoEnhancment1PageRoutingModule {}

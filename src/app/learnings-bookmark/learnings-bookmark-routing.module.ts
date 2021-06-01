import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearningsBookmarkPage } from './learnings-bookmark.page';

const routes: Routes = [
  {
    path: '',
    component: LearningsBookmarkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearningsBookmarkPageRoutingModule {}

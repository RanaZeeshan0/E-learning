import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseDetailsOverviewPage } from './course-details-overview.page';

const routes: Routes = [
  {
    path: '',
    component: CourseDetailsOverviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseDetailsOverviewPageRoutingModule {}

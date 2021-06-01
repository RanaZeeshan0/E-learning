import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseDetailsEnrolledPage } from './course-details-enrolled.page';

const routes: Routes = [
  {
    path: '',
    component: CourseDetailsEnrolledPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseDetailsEnrolledPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCourses2Page } from './create-courses2.page';

const routes: Routes = [
  {
    path: '',
    component: CreateCourses2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateCourses2PageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCoursesFormPage } from './create-courses-form.page';

const routes: Routes = [
  {
    path: '',
    component: CreateCoursesFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateCoursesFormPageRoutingModule {}

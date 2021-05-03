import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchCoursesPage } from './search-courses.page';

const routes: Routes = [
  {
    path: '',
    component: SearchCoursesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchCoursesPageRoutingModule {}

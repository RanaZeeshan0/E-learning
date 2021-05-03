import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchCoursesPageRoutingModule } from './search-courses-routing.module';

import { SearchCoursesPage } from './search-courses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchCoursesPageRoutingModule
  ],
  declarations: [SearchCoursesPage]
})
export class SearchCoursesPageModule {}

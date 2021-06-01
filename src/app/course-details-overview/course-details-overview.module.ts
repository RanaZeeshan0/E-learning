import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseDetailsOverviewPageRoutingModule } from './course-details-overview-routing.module';

import { CourseDetailsOverviewPage } from './course-details-overview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseDetailsOverviewPageRoutingModule
  ],
  declarations: [CourseDetailsOverviewPage]
})
export class CourseDetailsOverviewPageModule {}

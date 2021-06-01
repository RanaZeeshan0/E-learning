import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseDetailsEnrolledPageRoutingModule } from './course-details-enrolled-routing.module';

import { CourseDetailsEnrolledPage } from './course-details-enrolled.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseDetailsEnrolledPageRoutingModule
  ],
  declarations: [CourseDetailsEnrolledPage]
})
export class CourseDetailsEnrolledPageModule {}

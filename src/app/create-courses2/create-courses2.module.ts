import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateCourses2PageRoutingModule } from './create-courses2-routing.module';

import { CreateCourses2Page } from './create-courses2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateCourses2PageRoutingModule
  ],
  declarations: [CreateCourses2Page]
})
export class CreateCourses2PageModule {}

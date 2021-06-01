import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateCoursesFormPageRoutingModule } from './create-courses-form-routing.module';

import { CreateCoursesFormPage } from './create-courses-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateCoursesFormPageRoutingModule
  ],
  declarations: [CreateCoursesFormPage]
})
export class CreateCoursesFormPageModule {}

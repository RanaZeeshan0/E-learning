import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProviderDetailCoursesPageRoutingModule } from './provider-detail-courses-routing.module';

import { ProviderDetailCoursesPage } from './provider-detail-courses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProviderDetailCoursesPageRoutingModule
  ],
  declarations: [ProviderDetailCoursesPage]
})
export class ProviderDetailCoursesPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LearningsPageRoutingModule } from './learnings-routing.module';

import { LearningsPage } from './learnings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LearningsPageRoutingModule
  ],
  declarations: [LearningsPage]
})
export class LearningsPageModule {}

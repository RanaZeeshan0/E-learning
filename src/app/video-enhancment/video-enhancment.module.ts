import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoEnhancmentPageRoutingModule } from './video-enhancment-routing.module';

import { VideoEnhancmentPage } from './video-enhancment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoEnhancmentPageRoutingModule
  ],
  declarations: [VideoEnhancmentPage]
})
export class VideoEnhancmentPageModule {}

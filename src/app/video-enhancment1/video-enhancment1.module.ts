import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoEnhancment1PageRoutingModule } from './video-enhancment1-routing.module';

import { VideoEnhancment1Page } from './video-enhancment1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoEnhancment1PageRoutingModule
  ],
  declarations: [VideoEnhancment1Page]
})
export class VideoEnhancment1PageModule {}

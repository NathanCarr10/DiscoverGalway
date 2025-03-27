import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SightseeingPageRoutingModule } from './sightseeing-routing.module';

import { SightseeingPage } from './sightseeing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SightseeingPageRoutingModule
  ],
  declarations: [SightseeingPage]
})
export class SightseeingPageModule {}

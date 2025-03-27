import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmergencyInfoPageRoutingModule } from './emergency-info-routing.module';

import { EmergencyInfoPage } from './emergency-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmergencyInfoPageRoutingModule
  ],
  declarations: [EmergencyInfoPage]
})
export class EmergencyInfoPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GettingAroundPageRoutingModule } from './getting-around-routing.module';
import { GettingAroundPage } from './getting-around.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GettingAroundPageRoutingModule,
    GettingAroundPage,
  ]
})
export class GettingAroundPageModule {}


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodDrinkPageRoutingModule } from './food-drink-routing.module';

import { FoodDrinkPage } from './food-drink.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodDrinkPageRoutingModule
  ],
  declarations: [FoodDrinkPage]
})
export class FoodDrinkPageModule {}

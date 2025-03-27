import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodDrinkPage } from './food-drink.page';

const routes: Routes = [
  {
    path: '',
    component: FoodDrinkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodDrinkPageRoutingModule {}

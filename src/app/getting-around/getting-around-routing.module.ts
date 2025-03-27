import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GettingAroundPage } from './getting-around.page';

const routes: Routes = [
  {
    path: '',
    component: GettingAroundPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GettingAroundPageRoutingModule {}

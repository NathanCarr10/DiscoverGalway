import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SightseeingPage } from './sightseeing.page';

const routes: Routes = [
  {
    path: '',
    component: SightseeingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SightseeingPageRoutingModule {}

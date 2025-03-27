import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'sightseeing',
    loadChildren: () => import('./sightseeing/sightseeing.module').then( m => m.SightseeingPageModule)
  },
  {
    path: 'food-drink',
    loadChildren: () => import('./food-drink/food-drink.module').then( m => m.FoodDrinkPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

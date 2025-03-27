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
  {
    path: 'events',
    loadChildren: () => import('./events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'getting-around',
    loadChildren: () => import('./getting-around/getting-around.module').then( m => m.GettingAroundPageModule)
  },
  {
    path: 'emergency-info',
    loadChildren: () => import('./emergency-info/emergency-info.module').then( m => m.EmergencyInfoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

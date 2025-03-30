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
    loadComponent: () => import('./sightseeing/sightseeing.page').then(m => m.SightseeingPage)
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
    loadComponent: () => import('./map/map.page').then(m => m.MapPage)
  },
  
  {
    path: 'getting-around',
    loadComponent: () => import('./getting-around/getting-around.page').then(m => m.GettingAroundPage)
  },

  {
    path: 'emergency-info',
    loadChildren: () => import('./emergency-info/emergency-info.module').then( m => m.EmergencyInfoPageModule)
  },

  {
    path: 'bus-routes',
    loadComponent: () => import('./bus-routes/bus-routes.page').then(m => m.BusRoutesPage)
  },
   
  {
    path: 'bus-401',
    loadComponent: () => import('./bus-401/bus-401.page').then(m => m.Bus401Page)
  },

  {
    path: 'bus-402',
    loadComponent: () => import('./bus-402/bus-402.page').then(m => m.Bus402Page)
  },

  {
    path: 'bus-405',
    loadComponent: () => import('./bus-405/bus-405.page').then(m => m.Bus405Page)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

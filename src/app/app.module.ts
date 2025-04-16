import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { IonicStorageModule } from '@ionic/storage-angular';
import { HttpClientModule } from '@angular/common/http';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),           // Initialize Ionic framework
    AppRoutingModule,                // App routes
    IonicStorageModule.forRoot(),   // Local storage
    HttpClientModule,               // Enables HTTP requests

    // Service Worker registration for PWA support
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(), // Only enable in production builds
      registrationStrategy: 'registerWhenStable:30000' // Register after 30s or once stable
    })
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy } // Enables Ionic-style routing reuse
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Platform } from '@ionic/angular';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false, // Using classic Angular module-based setup
})
export class AppComponent {
  constructor(
    private dataService: DataService,
    private platform: Platform
  ) {
    // Initialize app when platform is ready
    this.initializeStorage();
    this.platform.ready().then(() => {
      this.setStatusBar(); // Apply status bar styling
    });
  }

  // Create Ionic Storage instance
  async initializeStorage() {
    await this.dataService.init();
  }

  // Configure the native status bar styling
  async setStatusBar() {
    try {
      await StatusBar.setStyle({ style: Style.Light });
      await StatusBar.setBackgroundColor({ color: '#800000' }); // Match app theme
      await StatusBar.setOverlaysWebView({ overlay: false });   // Prevent content overlap
    } catch (error) {
      console.warn('StatusBar plugin failed', error);
    }
  }
}

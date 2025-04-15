import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Platform } from '@ionic/angular';
import { StatusBar, Style } from '@capacitor/status-bar'; // Import StatusBar plugin

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(
    private dataService: DataService,
    private platform: Platform
  ) {
    this.initializeStorage();
    this.platform.ready().then(() => {
      this.setStatusBar(); // Fix for top overlay issue
    });
  }

  async initializeStorage() {
    await this.dataService.init();
  }

  async setStatusBar() {
    try {
      await StatusBar.setStyle({ style: Style.Light });
      await StatusBar.setBackgroundColor({ color: '#800000' }); 
      await StatusBar.setOverlaysWebView({ overlay: false }); 
    } catch (error) {
      console.warn('StatusBar plugin failed', error);
    }
  }
}

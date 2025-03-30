import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { DataService } from '../services/data.service';
import { FooterNavComponent } from '../footer-nav/footer-nav.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, FooterNavComponent]
})
export class HomePage {
  constructor(private dataService: DataService) {}

  async saveData() {
    await this.dataService.setData('userPreferences', { theme: 'dark' });
  }

  async loadData() {
    const data = await this.dataService.getData('userPreferences');
    console.log('Loaded data:', data);
  }
}

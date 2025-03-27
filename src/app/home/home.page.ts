import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
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

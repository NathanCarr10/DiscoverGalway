import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { DataService } from '../services/data.service';
import { FooterNavComponent } from '../footer-nav/footer-nav.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, FooterNavComponent, HttpClientModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage {
  weather: any;

  constructor(
    private dataService: DataService,
    private http: HttpClient
  ) {
    this.loadWeather();
  }

  // Optional: Store some sample user data
  async saveData() {
    await this.dataService.setData('userPreferences', { theme: 'dark' });
  }

  // Optional: Load saved user data
  async loadData() {
    const data = await this.dataService.getData('userPreferences');
    console.log('Loaded data:', data);
  }

  // Fetch weather info from API
  loadWeather() {
    const apiKey = '9b9a0e0fdb7841c5a1b173245253103';
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Galway`;

    this.http.get(url).subscribe(data => {
      this.weather = data;
    });
  }
}

import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private dataService: DataService) {
  this.initializeStorage();
}

async initializeStorage() {
  await this.dataService.init();
}
}
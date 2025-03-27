import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-getting-around',
  templateUrl: './getting-around.page.html',
  styleUrls: ['./getting-around.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class GettingAroundPage {
  transportOptions = [
    { type: 'Bus', description: 'Local bus routes and timetables available.' },
    { type: 'Taxi', description: 'Available city-wide. Use local apps or taxi ranks.' },
    { type: 'Ceannt Train Station', description: 'Main train station in Galway City.' }
  ];
}

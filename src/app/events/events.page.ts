import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})



export class EventsPage {

  events = [
    { name: 'Galway Race Week', date: 'July 27, 2025', location: 'Ballybrit Racecourse' },
    { name: 'Galway Arts Festival', date: 'July 14, 2025', location: 'Eyre Square' }
  ];
  

}



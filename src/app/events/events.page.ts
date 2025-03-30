import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterNavComponent } from '../footer-nav/footer-nav.component';


@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, FooterNavComponent],
})



export class EventsPage {

  events = [
    {
      name: 'Galway Race Week',
      date: 'July 28 – Aug 3, 2025',
      description: 'Ireland’s biggest horse racing festival, full of fashion, fun, and excitement.',
      image: 'assets/images/galway-races.jpg',
      mapLink: 'geo:0,0?q=Galway+Racecourse'
    },
    {
      name: 'Galway International Arts Festival',
      date: 'July 14 – 27, 2025',
      description: 'Two weeks of world-class theatre, music, visual arts, and spectacle.',
      image: 'assets/images/arts-festival.jpg',
      mapLink: 'geo:0,0?q=Eyre+Square+Galway'
    },
    {
      name: 'Galway Oyster Festival',
      date: 'September 26 – 28, 2025',
      description: 'Celebrate Galway’s world-famous oysters with food, music & parades.',
      image: 'assets/images/oyster-festival.jpg',
      mapLink: 'geo:0,0?q=Spanish+Arch+Galway'
    },
    {
      name: 'Comedy Festival 2025',
      date: 'October 21 – 27, 2025',
      description: 'A week of top comedy acts performing in venues across the city.',
      image: 'assets/images/comedy-festival.jpg',
      mapLink: 'geo:0,0?q=Black+Box+Theatre+Galway'
    },
    {
      name: 'Heineken Big Top',
      date: 'Various Dates – Summer 2025',
      description: 'Live music under the big top tent at Fisheries Field, Galway.',
      image: 'assets/images/heineken-big-top.jpg',
      mapLink: 'geo:0,0?q=Fisheries+Field+Galway'
    }
  ];
  
  openMap(link: string) {
    window.open(link, '_system');
  }
}



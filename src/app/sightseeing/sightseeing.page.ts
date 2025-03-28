import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sightseeing',
  templateUrl: './sightseeing.page.html',
  styleUrls: ['./sightseeing.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class SightseeingPage {
  sights = [
    {
      name: 'Galway Cathedral',
      description: 'Iconic stone cathedral with stunning architecture.',
      image: 'assets/images/galway-cathedral.jpg',
      mapLink: 'geo:0,0?q=Galway+Cathedral'
    },
    {
      name: 'Eyre Square',
      description: 'Popular public park in the city centre.',
      image: 'assets/images/eyre-square.jpg',
      mapLink: 'geo:0,0?q=Galway+Eyre+Square'
    },
    {
      name: 'Spanish Arch',
      description: 'Historic arch from the 1500s.',
      image: 'assets/images/spanish-arch.jpg',
      mapLink: 'geo:0,0?q=Galway+Spanish+Arch'
    },
    {
      name: 'Salthill Prom',
      description: 'Scenic seaside walk and beach area.',
      image: 'assets/images/salthill-prom.jpg',
      mapLink: 'geo:0,0?q=Galway+Salthill+Prom'

    },
    {
      name: 'The Latin Quarter',
      description: 'Bustling streets with shops, pubs and history.',
      image: 'assets/images/latin-quarter.jpg',
      mapLink: 'geo:0,0?q=Galway+Latin+Quarter'
    },
    {
      name: 'Galway WestEnd',
      description: 'Trendy area with bars and local vibes.',
      image: 'assets/images/westend.jpg',
      mapLink: 'geo:0,0?q=Galway+WestEnd'
    },
    {
      name: 'Aquarium',
      description: 'Explore marine life on Galway’s coast.',
      image: 'assets/images/aquarium.jpg',
      mapLink: 'geo:0,0?q=Galway+Salthill+Aquarium'
    }
  ];  

  openMap(link: string) {
    window.open(link, '_system'); // opens in external app (Maps)
  }
  
}

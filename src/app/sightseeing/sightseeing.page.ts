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
      image: 'assets/images/galway-cathedral.jpg'
    },
    {
      name: 'Eyre Square',
      description: 'Popular public park in the city centre.',
      image: 'assets/images/eyre-square.jpg'
    },
    {
      name: 'Spanish Arch',
      description: 'Historic arch from the 1500s.',
      image: 'assets/images/spanish-arch.jpg'
    },
    {
      name: 'Salthill Prom',
      description: 'Scenic seaside walk and beach area.',
      image: 'assets/images/salthill-prom.jpg'
    },
    {
      name: 'The Latin Quarter',
      description: 'Bustling streets with shops, pubs and history.',
      image: 'assets/images/latin-quarter.jpg'
    },
    {
      name: 'Galway WestEnd',
      description: 'Trendy area with bars and local vibes.',
      image: 'assets/images/westend.jpg'
    },
    {
      name: 'Aquarium',
      description: 'Explore marine life on Galway’s coast.',
      image: 'assets/images/aquarium.jpg'
    }
  ];
  
}

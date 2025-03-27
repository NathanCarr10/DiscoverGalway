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
    { name: 'Galway Cathedral', description: 'Iconic stone cathedral with stunning architecture.' },
    { name: 'Eyre Square', description: 'Popular public park in the city centre.' },
    { name: 'Spanish Arch', description: 'Historic arch from the 1500s.' },
    { name: 'Salthill Prom', description: 'Scenic seaside walk and beach area.' },
    { name: 'The Latin Quarter', description: 'Bustling streets with shops, pubs and history.' },
    { name: 'Galway WestEnd', description: 'Trendy area with bars and local vibes.' },
    { name: 'Aquarium', description: 'Explore marine life on Galway’s coast.' }
  ];
}

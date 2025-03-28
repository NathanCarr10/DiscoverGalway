import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-food-drink',
  templateUrl: './food-drink.page.html',
  styleUrls: ['./food-drink.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class FoodDrinkPage {
  foodPlaces = [
    {
      name: 'An Púcán',
      type: 'Bar & Restaurant',
      description: 'Lively pub with live music, Irish food, and great whiskey.',
      image: 'assets/images/an-pucan.jpg',
      mapLink: 'geo:0,0?q=An+Púcán+Galway'
    },
    {
      name: 'McDonagh\'s Seafood House',
      type: 'Seafood',
      description: 'Fresh fish & chips, oysters, and Galway’s famous seafood.',
      image: 'assets/images/mcdonaghs.jpg',
      mapLink: 'geo:0,0?q=McDonagh\'s+Seafood+Galway'
    },
    {
      name: 'The King’s Head',
      type: 'Historic Pub',
      description: '800-year-old pub with live music and hearty Irish food.',
      image: 'assets/images/kings-head.jpg',
      mapLink: 'geo:0,0?q=The+King\'s+Head+Galway'
    },
    {
      name: 'Busker Brownes',
      type: 'Bar & Restaurant',
      description: 'Modern Irish pub in a historic Dominican building.',
      image: 'assets/images/busker-brownes.jpg',
      mapLink: 'geo:0,0?q=Busker+Brownes+Galway'
    },
    {
      name: 'Supermac’s',
      type: 'Fast Food',
      description: 'Ireland’s answer to McDonald’s — a quick bite any time.',
      image: 'assets/images/supermacs.jpg',
      mapLink: 'geo:0,0?q=Supermacs+Eyre+Square+Galway'
    }
  ];
  
  openMap(link: string) {
    window.open(link, '_system');
  }

}

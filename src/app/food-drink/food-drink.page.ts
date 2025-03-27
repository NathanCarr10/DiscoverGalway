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
    { name: 'Supermacs', type: 'Fast Food', location: 'Eyre Square' },
    { name: 'Wooza Pizza', type: 'Italian', location: 'Middle Street' }
  ];
}

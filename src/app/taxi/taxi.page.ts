import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-taxi',
  templateUrl: './taxi.page.html',
  styleUrls: ['./taxi.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule]
})
export class TaxiPage {
  taxiCompany = {
    name: 'Galway Taxi Co.',
    image: 'assets/images/taxi-company.jpg',
    phone: '+35391585858',
    mapLink: 'geo:0,0?q=Galway+Taxi+Rank'
  };

  callTaxi() {
    window.open(`tel:${this.taxiCompany.phone}`, '_system');
  }

  openMap() {
    window.open(this.taxiCompany.mapLink, '_system');
  }
}

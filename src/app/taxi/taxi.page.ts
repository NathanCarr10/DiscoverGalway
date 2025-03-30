import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-taxi',
  templateUrl: './taxi.page.html',
  styleUrls: ['./taxi.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class TaxiPage {
  taxiCompany = {
    name: 'Big One Taxi Company Galway',
    address: '17 Eyre Square, Centre, Galway, H91 YX84',
    image: 'assets/images/taxi-company.jpg',
    phone: '+35391585858',
    destination: 'Galway Taxi Rank Eyre Square'
  };

  async openNearestTaxiRank() {
    try {
      const position = await Geolocation.getCurrentPosition();
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      const destinationQuery = encodeURIComponent(this.taxiCompany.destination);

      const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${lat},${lng}&destination=${destinationQuery}`;
      window.open(mapsUrl, '_system');
    } catch (error) {
      console.error('Could not get location', error);
      alert('Location access is required to find nearby taxi ranks.');
    }
  }

  callTaxi() {
    window.open(`tel:${this.taxiCompany.phone}`, '_system');
  }
}

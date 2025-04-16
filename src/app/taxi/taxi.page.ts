import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Geolocation } from '@capacitor/geolocation';
import { FooterNavComponent } from '../footer-nav/footer-nav.component';

@Component({
  selector: 'app-taxi',
  templateUrl: './taxi.page.html',
  styleUrls: ['./taxi.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FooterNavComponent],
})
export class TaxiPage {
  // Taxi company details
  taxiCompany = {
    name: 'Big One Taxi Company Galway',
    address: '17 Eyre Square, Centre, Galway, H91 YX84',
    image: 'assets/images/taxi-company.jpg',
    phone: '+35391585858',
    destination: 'Galway Taxi Rank Eyre Square'
  };

  // Opens Google Maps with directions to nearest taxi rank
  async openNearestTaxiRank() {
    try {
      const position = await Geolocation.getCurrentPosition();
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      const encodedDest = encodeURIComponent(this.taxiCompany.destination);
      const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${lat},${lng}&destination=${encodedDest}`;
      window.open(mapsUrl, '_system');
    } catch (error) {
      console.error('Could not get location', error);
      alert('Location access is required to find nearby taxi ranks.');
    }
  }

  // Opens dialer to call the taxi company
  callTaxi() {
    window.open(`tel:${this.taxiCompany.phone}`, '_system');
  }
}

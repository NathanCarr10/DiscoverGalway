import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Geolocation } from '@capacitor/geolocation';
import { FooterNavComponent } from '../footer-nav/footer-nav.component';

@Component({
  selector: 'app-train-station',
  templateUrl: './train-station.page.html',
  styleUrls: ['./train-station.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FooterNavComponent],
})
export class TrainStationPage {
  // Ceannt Station details and related URLs
  station = {
    name: 'Ceannt Station',
    image: 'assets/images/ceannt-station.jpg',
    description: 'Galway’s central train station, offering routes to Dublin, Limerick, and more.',
    destinationQuery: 'Ceannt Train Station Galway',
    website: 'https://www.irishrail.ie/en-ie/station/galway-ceannt',
    liveInfo: 'https://www.irishrail.ie/en-ie/train-timetables/live-departure-train-times',
    tickets: 'https://www.irishrail.ie/en-ie/rail-fares-and-tickets/fares-info',
    phone: '+35318733622'
  };

  // Opens Google Maps with directions from user's location
  async openDirections() {
    try {
      const position = await Geolocation.getCurrentPosition();
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      const destination = encodeURIComponent(this.station.destinationQuery);
      const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${lat},${lng}&destination=${destination}`;
      window.open(mapsUrl, '_system');
    } catch (err) {
      console.error('Location error:', err);
      alert('Could not get your location. Please enable location services.');
    }
  }

  // Open station info website
  openWebsite() {
    window.open(this.station.website, '_system');
  }

  // Open live train info
  openLiveInfo() {
    window.open(this.station.liveInfo, '_system');
  }

  // Open ticket purchase page
  buyTickets() {
    window.open(this.station.tickets, '_system');
  }

  // Call the train station
  callStation() {
    window.open(`tel:${this.station.phone}`, '_system');
  }
}

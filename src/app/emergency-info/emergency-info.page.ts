import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Geolocation } from '@capacitor/geolocation';
import { FooterNavComponent } from '../footer-nav/footer-nav.component';

// Page component for displaying emergency services info
@Component({
  selector: 'app-emergency-info',
  templateUrl: './emergency-info.page.html',
  styleUrls: ['./emergency-info.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FooterNavComponent]
})
export class EmergencyInfoPage {
  // List of local emergency services
  services = [
    {
      type: 'Garda Station',
      description: 'Mill Street Garda Station – Galway’s main police station.',
      image: 'assets/images/garda.jpg',
      phone: '+35391538000',
      destination: 'Mill Street Garda Station Galway'
    },
    {
      type: 'Hospital',
      description: 'University Hospital Galway (UHG) – 24/7 emergency care.',
      image: 'assets/images/hospital.jpg',
      phone: '+35391524222',
      destination: 'University Hospital Galway'
    },
    {
      type: 'Fire Station',
      description: 'Galway Fire Station – rapid response and emergency services.',
      image: 'assets/images/fire-station.jpg',
      phone: '+35391509070',
      destination: 'Galway Fire Station'
    }
  ];

  // Uses device geolocation to open Google Maps directions
  async getDirections(destination: string) {
    try {
      const position = await Geolocation.getCurrentPosition();
      const { latitude, longitude } = position.coords;
      const encodedDest = encodeURIComponent(destination);
      const mapUrl = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${encodedDest}`;
      window.open(mapUrl, '_system');
    } catch (err) {
      console.error('Location error:', err);
      alert('Unable to access your location. Please enable GPS.');
    }
  }

  // Opens phone dialer with the selected service number
  callService(phone: string) {
    window.open(`tel:${phone}`, '_system');
  }
}

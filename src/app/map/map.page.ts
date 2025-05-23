import { Component, AfterViewInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import * as L from 'leaflet';
import { Geolocation } from '@capacitor/geolocation';
import { FooterNavComponent } from '../footer-nav/footer-nav.component';

// Fix for missing Leaflet icons when building to Android/iOS
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'assets/leaflet/marker-icon-2x.png',
  iconUrl: 'assets/leaflet/marker-icon.png',
  shadowUrl: 'assets/leaflet/marker-shadow.png'
});

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FooterNavComponent],
})
export class MapPage implements AfterViewInit {
  private map!: L.Map;

  // List of static points of interest
  locations = [
    { name: 'Eyre Square', coords: [53.2744, -9.0496], description: 'Public park at the heart of Galway' },
    { name: 'Spanish Arch', coords: [53.2697, -9.0533], description: 'Historic stone arch and scenic spot' },
    { name: 'Ceannt Train Station', coords: [53.2735, -9.0499], description: 'Central train station for Galway' },
    { name: 'University Hospital Galway', coords: [53.2767, -9.0659], description: '24/7 emergency care' },
    { name: 'Galway Fire Station', coords: [53.2725, -9.0678], description: 'City’s main fire services' },
    { name: 'Mill Street Garda Station', coords: [53.2705, -9.0565], description: 'Main Garda (police) station' }
  ];

  async ngAfterViewInit() {
    // Load the map centered on Galway
    this.map = L.map('map').setView([53.2744, -9.0496], 14);

    // Load tile layer from OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    // Add markers for key locations
    this.locations.forEach(loc => {
      L.marker(loc.coords as L.LatLngExpression).addTo(this.map)
        .bindPopup(`
          <b>${loc.name}</b><br>
          ${loc.description}<br>
          <a href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(loc.name + ' Galway')}" target="_blank">
            Directions
          </a>
        `);
    });

    // Attempt to get and display user's current location
    try {
      await Geolocation.requestPermissions();

      const pos = await Geolocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      });

      const userCoords = [pos.coords.latitude, pos.coords.longitude];

      L.marker(userCoords as L.LatLngExpression, {
        icon: L.icon({
          iconUrl: 'https://cdn-icons-png.flaticon.com/512/64/64113.png',
          iconSize: [25, 25],
          iconAnchor: [12, 25]
        })
      })
      .addTo(this.map)
      .bindPopup('You are here')
      .openPopup();

      this.map.setView(userCoords as L.LatLngExpression, 15);
    } catch (error) {
      console.warn('Could not get user location', error);
      alert('Unable to retrieve location. Please ensure GPS and permissions are enabled.');
    }

    // Fix layout bug that sometimes causes the map to render incorrectly
    setTimeout(() => {
      this.map.invalidateSize();
    }, 500);
  }
}

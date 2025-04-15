import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer-nav',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
  templateUrl: './footer-nav.component.html',
  styleUrls: ['./footer-nav.component.scss']
})
export class FooterNavComponent {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }

  goForward(): void {
    if (window.history.length > 1) {
      window.history.forward();
    } else {
      console.warn('No forward history available.');
    }
  }
}

import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterNavComponent } from '../footer-nav/footer-nav.component';

// List of available Galway city bus routes
@Component({
  selector: 'app-bus-routes',
  templateUrl: './bus-routes.page.html',
  styleUrls: ['./bus-routes.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, FooterNavComponent]
})
export class BusRoutesPage {}

import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FooterNavComponent } from '../footer-nav/footer-nav.component';
import 'pinch-zoom-element';

// Bus 401 (Salthill route) page definition
@Component({
  selector: 'app-bus-401',
  templateUrl: './bus-401.page.html',
  styleUrls: ['./bus-401.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FooterNavComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Enables use of custom web components like <pinch-zoom>
})
export class Bus401Page {}

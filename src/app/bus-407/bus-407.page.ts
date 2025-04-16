import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FooterNavComponent } from '../footer-nav/footer-nav.component';
import 'pinch-zoom-element';

// Bus 407 (Bóthar an Chóiste route) page
@Component({
  selector: 'app-bus-407',
  templateUrl: './bus-407.page.html',
  styleUrls: ['./bus-407.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FooterNavComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Bus407Page {}

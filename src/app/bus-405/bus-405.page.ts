import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FooterNavComponent } from '../footer-nav/footer-nav.component';
import 'pinch-zoom-element';

// Bus 405 (Newcastle/Rahoon route) page setup
@Component({
  selector: 'app-bus-405',
  templateUrl: './bus-405.page.html',
  styleUrls: ['./bus-405.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FooterNavComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Bus405Page {}

import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FooterNavComponent } from '../footer-nav/footer-nav.component';


import 'pinch-zoom-element';

@Component({
  selector: 'app-bus-402',
  templateUrl: './bus-402.page.html',
  styleUrls: ['./bus-402.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule,FooterNavComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class Bus402Page {}

import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import 'pinch-zoom-element';

@Component({
  selector: 'app-bus-401',
  templateUrl: './bus-401.page.html',
  styleUrls: ['./bus-401.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class Bus401Page {}

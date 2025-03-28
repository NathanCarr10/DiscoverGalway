import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bus-routes',
  templateUrl: './bus-routes.page.html',
  styleUrls: ['./bus-routes.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class BusRoutesPage {}

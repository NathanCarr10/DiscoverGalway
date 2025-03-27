import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-emergency-info',
  templateUrl: './emergency-info.page.html',
  styleUrls: ['./emergency-info.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class EmergencyInfoPage {}

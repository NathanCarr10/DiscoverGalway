import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FooterNavComponent } from '../footer-nav/footer-nav.component';

// About Page component definition
@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FooterNavComponent]
})
export class AboutPage {}

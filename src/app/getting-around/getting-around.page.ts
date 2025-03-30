import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterNavComponent } from '../footer-nav/footer-nav.component';


@Component({
  selector: 'app-getting-around',
  templateUrl: './getting-around.page.html',
  styleUrls: ['./getting-around.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, FooterNavComponent]
})
export class GettingAroundPage {}

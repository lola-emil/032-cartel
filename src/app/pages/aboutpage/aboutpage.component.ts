import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';

@Component({
  selector: 'app-aboutpage',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './aboutpage.component.html',
  styleUrl: './aboutpage.component.css',
})
export class AboutpageComponent {}

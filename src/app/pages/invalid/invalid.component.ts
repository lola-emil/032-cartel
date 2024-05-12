import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-invalid',
  standalone: true,
  imports: [NavComponent, RouterLink],
  templateUrl: './invalid.component.html',
  styleUrl: './invalid.component.css',
})
export class InvalidComponent {}

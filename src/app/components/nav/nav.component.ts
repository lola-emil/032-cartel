import { Component, NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf, NgClass } from '@angular/common';
import { JwtService } from '../../service/JwtService';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, NgIf, NgClass],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  constructor(private jwtService: JwtService) {}
  menuVisible = false;
  isSignedIn = false;

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  showUsername() {
    let username = this.jwtService.getUsername;
    console.log(` Hello ${username}`);
    this.isSignedIn = !!username;
  }
}

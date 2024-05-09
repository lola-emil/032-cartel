import { Component, NgModule, OnInit } from '@angular/core';
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
export class NavComponent implements OnInit {
  constructor(private jwtService: JwtService) {}
  menuVisible = false;
  isSignedIn = false;
  username: any = null;

  ngOnInit() {
    if (this.jwtService.getUsername()) {
      this.username = this.jwtService.getUsername();
    } else {
      this.username = null;
    }
  }

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  logOut() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    window.location.replace('/signin');
  }
}

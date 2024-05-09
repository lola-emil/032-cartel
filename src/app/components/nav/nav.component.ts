import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf, NgClass } from '@angular/common';
import { JwtService } from '../../service/JwtService';
import { UserService } from '../../repository/user/user.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, NgIf, NgClass],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent implements OnInit {
  constructor(
    private jwtService: JwtService,
    private userService: UserService
  ) {}
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
    this.userService.logoutUser();
  }
}

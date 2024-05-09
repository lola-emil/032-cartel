import { Component, OnInit } from '@angular/core';
import { JwtService } from '../../service/JwtService';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-side-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admin-side-nav.component.html',
  styleUrl: './admin-side-nav.component.css',
})
export class AdminSideNavComponent implements OnInit {
  constructor(private jwtService: JwtService) {}
  username: any;
  ngOnInit(): void {
    this.username = this.jwtService.getUsername();
  }
  logOut() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    window.location.replace('/signin');
  }
}

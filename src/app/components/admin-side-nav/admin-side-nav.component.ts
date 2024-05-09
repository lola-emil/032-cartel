import { Component, OnInit } from '@angular/core';
import { JwtService } from '../../service/JwtService';
import { RouterLink } from '@angular/router';
import { UserService } from '../../repository/user/user.service';

@Component({
  selector: 'app-admin-side-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admin-side-nav.component.html',
  styleUrl: './admin-side-nav.component.css',
})
export class AdminSideNavComponent implements OnInit {
  constructor(
    private jwtService: JwtService,
    private userService: UserService
  ) {}
  username: any;
  ngOnInit(): void {
    this.username = this.jwtService.getUsername();
  }
  logOut() {
    this.userService.logoutUser();
  }
}

import { Component, OnInit } from '@angular/core';
import { JwtService } from '../../service/JwtService';
import { NavComponent } from '../../components/nav/nav.component';
import { UserService } from '../../repository/user/user.service';

@Component({
  selector: 'app-profilepage',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './profilepage.component.html',
  styleUrl: './profilepage.component.css',
})
export class ProfilepageComponent implements OnInit {
  constructor(
    private jwtService: JwtService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    if (this.jwtService.getRole() !== 'user') {
      window.location.href = '/admin';
    }
  }

  logOut() {
    this.userService.logoutUser();
  }
}

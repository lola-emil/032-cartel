import { Component, OnInit } from '@angular/core';
import { JwtService } from '../../service/JwtService';

@Component({
  selector: 'app-profilepage',
  standalone: true,
  imports: [],
  templateUrl: './profilepage.component.html',
  styleUrl: './profilepage.component.css',
})
export class ProfilepageComponent implements OnInit {
  constructor(private jwtService: JwtService) {}

  ngOnInit(): void {
    if (this.jwtService.getRole() !== 'user') {
      window.location.href = '/admin';
    }
  }
}

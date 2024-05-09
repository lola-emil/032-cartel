import { Component, OnInit } from '@angular/core';
import { JwtService } from '../../../../service/JwtService';
import { RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { AdminSideNavComponent } from '../../../../components/admin-side-nav/admin-side-nav.component';

@Component({
  selector: 'app-dashboardpage',
  standalone: true,
  templateUrl: './dashboardpage.component.html',
  styleUrl: './dashboardpage.component.css',
  imports: [RouterLink, NgIf, NgClass, AdminSideNavComponent],
})
export class DashboardpageComponent implements OnInit {
  username: string = 'Admin';
  constructor(private jwtService: JwtService) {}

  ngOnInit(): void {
    let role = this.jwtService.getRole();
    if (role !== 'admin' && role !== 'superuser') {
      window.location.href = '/';
    }
  }
}

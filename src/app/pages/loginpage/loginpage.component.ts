import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { UserService } from '../../repository/user/user.service';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgIf } from '@angular/common';
import { JwtService } from '../../service/JwtService';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NgIf],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css',
})
export class LoginpageComponent implements OnInit {
  constructor(
    private userService: UserService,
    private http: HttpClient,
    private router: Router,
    private jwtservice: JwtService
  ) {}
  ngOnInit(): void {
    if (this.jwtservice.getToken() !== null) {
      this.router.navigate(['/']);
    }
  }

  userForm = new FormGroup({
    creds: new FormControl(),
    password: new FormControl(),
  });

  errorMessage: string = '';

  user: any = [];

  loginUser(): void {
    this.userService.loginUser(this.userForm.value).subscribe(
      (response: any) => {
        this.user = response.token;
        console.log(`from component ${response}`);
        localStorage.setItem('token', JSON.stringify(this.user));
        this.router.navigate(['/']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }
}

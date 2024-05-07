import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { UserService } from '../../repository/user/user.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-registerpage',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NgIf],
  templateUrl: './registerpage.component.html',
  styleUrl: './registerpage.component.css',
})
export class RegisterpageComponent {
  constructor(
    private userService: UserService,
    private http: HttpClient,
    private router: Router
  ) {}

  errorMessage: string = '';

  userForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    confirmPass: new FormControl(),
    email: new FormControl(),
    fname: new FormControl(),
    lname: new FormControl(),
  });

  user: any = {};

  registerUser(): void {
    this.userService.registerUser(this.userForm.value).subscribe(
      (response) => {
        this.user = response;
        console.log(this.user);
        if (this.user != null) {
          this.router.navigate(['/signin']);
        }
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }
}

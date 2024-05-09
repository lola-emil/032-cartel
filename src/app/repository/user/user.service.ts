import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage: string = 'An error occurred';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `Error: ${err.error.message}`;
    } else {
      errorMessage = `${err.error.message}`;
    }
    return throwError(() => errorMessage);
  }

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  registerUser(user: {}) {
    return this.httpClient
      .post('http://localhost:4201/api/user/signup', JSON.stringify(user), {
        headers: this.headers,
      })
      .pipe(catchError(this.handleError));
  }

  loginUser(user: {}) {
    return this.httpClient
      .post('http://localhost:4201/api/user/login', JSON.stringify(user), {
        headers: this.headers,
      })
      .pipe(catchError(this.handleError));
  }

  validateAdminSession(user: {}) {
    return this.httpClient
      .post('http://localhost:4201/api/user/validateAdminSession', JSON.stringify(user), {
        headers: this.headers,
      })
      .pipe(catchError(this.handleError));
  }
}

import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  constructor() {}

  getToken(): string | null {
    console.log(`Token: ${localStorage.getItem('token')}`);
    return localStorage.getItem('token');
  }

  getDecodedToken(): any {
    const token = this.getToken();
    if (token) {
      try {
        return jwtDecode(token);
      } catch (error) {
        console.error('Error decoding token:', error);
        return null;
      }
    }
    return null;
  }

  getUserId(): string | null {
    const decodedToken = this.getDecodedToken();
    if (decodedToken) {
      return decodedToken.userId;
    }
    return null;
  }

  getUsername(): string | null {
    const decodedToken = this.getDecodedToken();
    if (decodedToken) {
      return decodedToken.username;
    }
    return null;
  }

  getRole(): string | null {
    const decodedToken = this.getDecodedToken();
    if (decodedToken) {
      return decodedToken.role;
    }
    return null;
  }
}

import { Router, Routes } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({ email, password }: any): Observable<any> {
    if (email === 'balaramgayen53501@gmail.com' && password === '1234') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({
        name: 'Balaram gayen ',
        email: 'balaramgayen53501@gmail.com',
      });
    }
    return throwError(new Error('Failed to login'));
  }
}

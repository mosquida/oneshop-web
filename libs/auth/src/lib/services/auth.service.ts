import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@oneshop-web/users';
import { Observable } from 'rxjs';
import { config } from '../../config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${config.API_URL}/users/login`, {
      email,
      password,
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../../config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<SuccessResponse> {
    return this.http.post<SuccessResponse>(`${config.API_URL}/users/login`, {
      email,
      password,
    });
  }
}

interface SuccessResponse {
  token: string;
  isAdmin: boolean;
}

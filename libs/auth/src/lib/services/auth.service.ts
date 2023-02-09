import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { config } from '../../config';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  login(email: string, password: string): Observable<SuccessResponse> {
    return this.http.post<SuccessResponse>(`${config.API_URL}/users/login`, {
      email,
      password,
    });
  }

  logout() {
    this.localStorageService.removeToken();
    this.router.navigateByUrl('/login');
  }
}

interface SuccessResponse {
  token: string;
  isAdmin: boolean;
}

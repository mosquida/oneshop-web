import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../../config';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${config.API_URL}/users`);
  }

  getUser(id: string | unknown): Observable<User> {
    return this.http.get<User>(`${config.API_URL}/users/${id}`);
  }

  updateUser(id: string, User: User): Observable<User> {
    return this.http.put<User>(`${config.API_URL}/users/${id}`, User);
  }

  deleteUser(id: string) {
    return this.http.delete(`${config.API_URL}/users${id}`);
  }
}

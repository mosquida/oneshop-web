import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { config } from '../../config';
import { User } from '../models/User';
import { UsersFacade } from '../state/users.facade';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private usersFacade: UsersFacade, private http: HttpClient) {}

  initUserStateSession() {
    // Calls an action to dispatach via facade service
    return this.usersFacade.buildUserStateSession();
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${config.API_URL}/users`);
  }

  getUser(id: string | unknown): Observable<User> {
    return this.http.get<User>(`${config.API_URL}/users/${id}`);
  }

  createUser(User: User): Observable<User> {
    return this.http.post<User>(`${config.API_URL}/users`, User);
  }

  updateUser(id: string, User: User): Observable<User> {
    return this.http.put<User>(`${config.API_URL}/users/${id}`, User);
  }

  deleteUser(id: string) {
    return this.http.delete(`${config.API_URL}/users/${id}`);
  }

  currentUser() {
    return of(this.usersFacade.currentUser$);
  }

  isCurrentUserAuthenticated() {
    return of(this.usersFacade.isAuthenticated$);
  }
}

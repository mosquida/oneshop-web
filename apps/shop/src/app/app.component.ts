import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UsersFacade, UsersService, UsersState } from '@oneshop-web/users';
import { timer } from 'rxjs';

@Component({
  selector: 'oneshop-web-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'shop';

  constructor(
    private usersService: UsersService,
    private usersFacade: UsersFacade
  ) {}

  ngOnInit() {
    this.usersService.initUserStateSession();

    this.usersFacade.isAuthenticated$.subscribe((user) => {
      console.log('tets');
      console.log(user);
    });

    this.usersFacade.currentUser$.subscribe((user) => {
      console.log(user);
    });
  }
}

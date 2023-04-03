import { Component, OnInit } from '@angular/core';
import { UsersService } from '@oneshop-web/users';

@Component({
  selector: 'oneshop-web-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'shop';

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.initUserStateSession();
  }
}

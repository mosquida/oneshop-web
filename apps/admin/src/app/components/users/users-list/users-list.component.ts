import { Component, OnInit } from '@angular/core';
import { UsersService } from '@oneshop-web/users';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'oneshop-web-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  users = [];

  constructor(
    private usersService: UsersService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this._users();
  }

  private _users(): void {
    this.usersService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  editUsers(id) {}

  deleteUsers(id) {}
}

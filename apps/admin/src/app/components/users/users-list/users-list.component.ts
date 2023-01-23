import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._getUsers();
  }

  private _getUsers(): void {
    this.usersService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  editUser(id: string): void {
    // Redirect to user form
    this.router.navigateByUrl(`/users/edit/${id}`);
  }

  deleteUser(id: string): void {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.usersService.deleteUser(id).subscribe({
          complete: () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Confirmed',
              detail: 'Category Deleted',
            });

            this._getUsers();
          },
          error: () => {
            this.messageService.add({
              severity: 'danger',
              summary: 'Error',
              detail: 'Category Not Deleted',
            });
          },
        });
      },
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User, UsersService } from '@oneshop-web/users';
import { MessageService } from 'primeng/api';
import { Location } from '@angular/common';
import { timer } from 'rxjs';

@Component({
  selector: 'oneshop-web-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss'],
})
export class UsersFormComponent implements OnInit {
  form: FormGroup;
  isSubmitted = false;
  editMode = false;
  id: string;

  // FormBuilder makes FormGroup thas has Formcontrol(for inputs)
  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private messageService: MessageService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      phone: ['', Validators.required],
      country: ['', Validators.required],
      isAdmin: ['', Validators.required],
      address: ['', Validators.required],
    });

    this._checkEditMode();
  }

  private _checkEditMode() {
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.editMode = true;
        this.id = params.id;

        // Populate the form fields
        this.usersService.getUser(params.id).subscribe((user) => {
          this.form.controls.name.setValue(user.name);
          this.form.controls.email.setValue(user.email);
          this.form.controls.password.setValue(user.password);
          this.form.controls.phone.setValue(user.phone);
          this.form.controls.country.setValue(user.country);
          this.form.controls.isAdmin.setValue(user.isAdmin);
          this.form.controls.address.setValue(user.address);
        });
      }
    });
  }

  private _submitUpdateUser(id: string, user: User): void {
    this.usersService.updateUser(id, user).subscribe({
      complete: () => {
        // show sucess toast notification
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'User Updated',
        });

        // Redirect back to list of categories
        timer(1000).subscribe(() => {
          this.location.back();
        });
      },
      error: () => {
        // show err toast notification
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Something went wrong, please try again later',
        });
      },
    });
  }

  private _submitCreateUser(user: User): void {
    this.usersService.createUser(user).subscribe({
      complete: () => {
        // show sucess toast notification
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'New User Added',
        });

        // Redirect back to list of categories
        timer(1000).subscribe(() => {
          this.location.back();
        });
      },
      error: () => {
        // show err toast notification
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Something went wrong, please try again later',
        });
      },
    });
  }

  onSumbit() {
    this.isSubmitted = true;

    if (this.form.invalid) return;

    const user: User = {
      name: this.form.controls.name.value,
      email: this.form.controls.email.value,
      password: this.form.controls.password.value,
      phone: this.form.controls.phone.value,
      address: this.form.controls.address.value,
      country: this.form.controls.country.value,
      isAdmin: this.form.controls.isAdmin.value,
    };

    if (this.editMode) {
      this._submitUpdateUser(this.id, user);
    } else {
      this._submitCreateUser(user);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'oneshop-web-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isSubmitted = false;
  errMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmitLogin(): void {
    this.isSubmitted = true;

    if (this.form.invalid) return;

    this.authService
      .login(this.form.controls.email.value, this.form.controls.password.value)
      .subscribe(
        (data) => {
          console.log(data);
        },
        (err) => {
          if (err.status !== 404) {
            return (this.errMessage = 'Server Error, try again later');
          }

          return (this.errMessage = 'Email or Password is incorrect');
        }
      );
  }
}

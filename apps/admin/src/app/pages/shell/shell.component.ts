import { Component, OnInit } from '@angular/core';
import { AuthService } from '@oneshop-web/auth';

@Component({
  selector: 'oneshop-web-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  logout(): void {
    this.authService.logout();
  }
}

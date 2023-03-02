import { Component, OnInit } from '@angular/core';
import { AuthService } from '@oneshop-web/auth';
import { CartService } from '@oneshop-web/orders';

@Component({
  selector: 'shop-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  cartCount: string = '0';
  openAccount = true;

  constructor(
    private cartService: CartService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.cartService.cart.subscribe((cart) => {
      this.cartCount = cart.items.length.toString();
    });
  }

  triggerOpenAccount(): void {
    this.openAccount = !this.openAccount;
  }

  logout() {
    this.authService.logout();
  }
}

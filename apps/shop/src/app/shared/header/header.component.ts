import { Component, OnInit } from '@angular/core';
import { CartService } from '@oneshop-web/orders';

@Component({
  selector: 'shop-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  cartCount: string = '0';

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart.subscribe((cart) => {
      this.cartCount = cart.items.length.toString();
    });
  }
}

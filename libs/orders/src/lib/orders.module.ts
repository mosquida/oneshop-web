import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './services/cart.service';

@NgModule({
  imports: [CommonModule],
})
export class OrdersModule {
  constructor(private cartService: CartService) {
    this.cartService.initCartStorage();
  }
}

import { Component, Input } from '@angular/core';
import { CartService } from '@oneshop-web/orders';

@Component({
  selector: 'oneshop-web-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss'],
})
export class CartItemsComponent {
  @Input() order;

  constructor(private cartService: CartService) {}

  deleteOrderItem(id) {
    this.cartService.deleteCartItem(id);
  }

  updateOrderQuantity(id, event) {
    const quantity = event.value;
    this.cartService.updateCartItem(id, quantity);
  }
}

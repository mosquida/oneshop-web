import { Component, Input } from '@angular/core';

@Component({
  selector: 'oneshop-web-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss'],
})
export class CartItemsComponent {
  @Input() order;
}

import { Component, OnInit } from '@angular/core';
import { CartService } from '@oneshop-web/orders';
import { ProductsService } from '@oneshop-web/products';

@Component({
  selector: 'oneshop-web-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private productsService: ProductsService
  ) {}

  orders = [];

  ngOnInit(): void {
    this.cartService.cart.subscribe((cart) => {
      // reset orders
      this.orders = [];

      // reinitialize the cart with details
      cart.items.forEach((item) => {
        this.productsService.getProduct(item.id).subscribe((product) => {
          const order = {
            product: product,
            quantity: item.quantity,
          };

          this.orders.push(order);
        });
      });
    });
  }
}

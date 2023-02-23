import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartService } from '@oneshop-web/orders';
import { ProductsService } from '@oneshop-web/products';

@Component({
  selector: 'oneshop-web-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private productsService: ProductsService,
    private formBuilder: FormBuilder
  ) {}

  orders = [];
  total = 0;
  form: FormGroup;

  ngOnInit(): void {
    this.cartService.cart.subscribe((cart) => {
      // reset
      this.orders = [];
      this.total = 0;

      cart.items.map((item) => {
        this.productsService.getProduct(item.id).subscribe((product) => {
          const order = {
            product: product,
            quantity: item.quantity,
          };

          this.orders.push(order);
          this.total += product.price * item.quantity;
        });
      });
    });

    // create form group
    this.form = this.formBuilder.group({
      email: [],
    });
  }
}

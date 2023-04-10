import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CartService, OrdersService } from '@oneshop-web/orders';
import { Product, ProductsService } from '@oneshop-web/products';
import { UsersFacade } from '@oneshop-web/users';

@Component({
  selector: 'oneshop-web-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private productsService: ProductsService,
    private formBuilder: FormBuilder,
    private ordersService: OrdersService,
    private router: Router,
    private usersFacade: UsersFacade,
    private store: Store
  ) {}

  orders = [];
  total = 0;
  userId;
  form: FormGroup;

  ngOnInit(): void {
    this._populateOrders();
    this._createForm();
    this._autocompleteForm();
  }

  private _populateOrders(): void {
    this.cartService.cart.subscribe((cart) => {
      // reset
      this.orders = [];
      this.total = 0;

      cart.items.map((item) => {
        this.productsService
          .getProduct(item.id)
          .subscribe((product: Product) => {
            const order = {
              product: product,
              quantity: item.quantity,
            };

            this.orders.push(order);
            this.total += product.price * item.quantity;
          });
      });
    });
  }

  private _createForm(): void {
    // create form group
    this.form = this.formBuilder.group({
      user: [''],
      orderItems: [this.formBuilder.array(this.cartService.getCart().items)],
      shippingAddress: [''],
      country: [''],
      phone: [''],
    });
  }

  private _autocompleteForm(): void {
    this.usersFacade.currentUser$.subscribe(() => {
      // this.userId = user._id;
      console.log('2323');
      // this.form.controls.country.setValue();
    });
  }

  submitOrder(userId) {
    const orderItems = [];

    this.orders.map((order) => {
      const orderItem = {
        product: order.product._id,
        quantity: order.quantity,
      };
      orderItems.push(orderItem);
    });

    const order = {
      orderItems: orderItems,
      shippingAddress: this.form.controls.shippingAddress.value,
      country: this.form.controls.country.value,
      phone: this.form.controls.phone.value,
      user: userId,
    };

    this.ordersService.createOrder(order).subscribe((order) => {
      this.cartService.resetCart();
      this.router.navigateByUrl('/success');
    });
  }
}

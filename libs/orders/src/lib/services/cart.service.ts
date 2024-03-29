import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from '../models/Cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: BehaviorSubject<Cart> = new BehaviorSubject<Cart>(this.getCart());

  initCartStorage(): void {
    if (!localStorage.getItem('cart')) {
      const cart = JSON.stringify({ items: [] });
      localStorage.setItem('cart', cart);
    }
  }

  resetCart(): void {
    localStorage.setItem('cart', JSON.stringify({ items: [] }));
    this.cart.next({ items: [] });
  }

  getCart() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return JSON.parse(localStorage.getItem('cart')!);
  }

  addCartItem(productId: string, quantity: number) {
    const cart: Cart = this.getCart();

    const itemExists = cart.items.find((item) => item.id === productId);

    if (itemExists) {
      cart.items.map((item) => {
        if (item.id === productId) item.quantity += quantity;
        return item;
      });
    } else {
      cart.items.push({ id: productId, quantity: quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    // trigger cart behaviour new content
    this.cart.next(cart);
    return cart;
  }

  updateCartItem(productId: string, quantity: number) {
    const cart: Cart = this.getCart();

    cart.items.map((item) => {
      if (item.id === productId) item.quantity = quantity;
      return item;
    });
    console.log(cart.items);

    localStorage.setItem('cart', JSON.stringify(cart));
    // trigger cart behaviour new content
    this.cart.next(cart);
    return cart;
  }

  deleteCartItem(productId: string) {
    const cart: Cart = this.getCart();

    const newcart = cart.items.filter((item) => {
      // return all except the specified id tp delete
      return item.id !== productId;
    });

    // update content
    cart.items = newcart;

    localStorage.setItem('cart', JSON.stringify(cart));
    // Update Cart behavior
    this.cart.next(cart);
  }
}

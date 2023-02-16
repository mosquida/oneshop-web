import { Injectable } from '@angular/core';
import { Cart } from '../models/Cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  initCartStorage(): void {
    if (!localStorage.getItem('cart')) {
      const cart = JSON.stringify({ items: [] });
      localStorage.setItem('cart', cart);
    }
  }

  addCartItem(productId: string, quantity: number) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const cart: Cart = JSON.parse(localStorage.getItem('cart')!);

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
  }
}

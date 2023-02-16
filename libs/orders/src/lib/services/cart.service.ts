import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  initCartStorage(): void {
    if (!localStorage.getItem('cart')) {
      const cart = JSON.stringify({ item: [] });
      localStorage.setItem('cart', cart);
    }
  }
}

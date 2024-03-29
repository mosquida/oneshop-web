import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order';
import { config } from '../../config';
import { OrderItem } from '../models/order-item';
import { StripeSession } from '../models/stripeSession';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${config.API_URL}/orders`);
  }

  getOrder(id: string | unknown): Observable<Order> {
    return this.http.get<Order>(`${config.API_URL}/orders/${id}`);
  }

  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${config.API_URL}/orders`, order);
  }

  updateOrder(id: string, order: unknown): Observable<Order> {
    return this.http.put<Order>(`${config.API_URL}/orders/${id}`, order);
  }

  deleteOrder(id: string) {
    return this.http.delete(`${config.API_URL}/orders/${id}`);
  }

  checkout(orderItem: OrderItem[]): Observable<StripeSession> {
    return this.http.post<StripeSession>(
      `${config.API_URL}/orders/create-checkout-session`,
      orderItem
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order, OrdersService } from '@oneshop-web/orders';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'oneshop-web-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
})
export class OrdersListComponent implements OnInit {
  orders: Order[];

  constructor(private ordersService: OrdersService, private router: Router) {}

  ngOnInit(): void {
    this._getOrderList();
  }
  private _getOrderList() {
    this.ordersService
      .getOrders()
      .subscribe((orders) => (this.orders = orders));
  }

  showOrderDetails(id) {
    this.router.navigateByUrl(`/orders/${id}`);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order, OrdersService } from '@oneshop-web/orders';

@Component({
  selector: 'oneshop-web-orders-details',
  templateUrl: './orders-details.component.html',
  styleUrls: ['./orders-details.component.scss'],
})
export class OrdersDetailsComponent implements OnInit {
  order: Order;
  shippingStatusOptions = [
    { name: 'Pending' },
    { name: 'Processed' },
    { name: 'Shipped' },
    { name: 'Delivered' },
    { name: 'Failed' },
  ];
  shippingStatus: string;
  orderId: string;

  constructor(
    private route: ActivatedRoute,
    private ordersService: OrdersService
  ) {}

  ngOnInit(): void {
    this._getOrderDetails();
  }

  _getOrderDetails() {
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.ordersService.getOrder(params.id).subscribe((order) => {
          this.order = order;
          this.orderId = order._id;
        });
      }
    });
  }

  onStatusChange(event) {
    console.log(event.value);
  }
}

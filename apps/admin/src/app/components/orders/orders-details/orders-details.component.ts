import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order, OrdersService } from '@oneshop-web/orders';
import { MessageService } from 'primeng/api';
import { timer } from 'rxjs';

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
    private ordersService: OrdersService,
    private messageService: MessageService
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
    const shipStatus = event.value;
    this.ordersService
      .updateOrder(this.orderId, { shippingStatus: shipStatus })
      .subscribe({
        complete: () => {
          // show sucess toast notification
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Product Updated',
          });

          this._getOrderDetails();
        },
        error: (error) => {
          console.log(error);
          // show err toast notification
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Something went wrong, please try again later',
          });
        },
      });
  }
}

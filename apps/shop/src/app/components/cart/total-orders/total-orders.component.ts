import { Component, Input } from '@angular/core';

@Component({
  selector: 'oneshop-web-total-orders',
  templateUrl: './total-orders.component.html',
  styleUrls: ['./total-orders.component.scss'],
})
export class TotalOrdersComponent {
  @Input() total;
}

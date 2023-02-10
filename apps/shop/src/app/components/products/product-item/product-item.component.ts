import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '@oneshop-web/products';

@Component({
  selector: 'oneshop-web-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent {
  constructor(private router: Router) {}

  @Input() product: Product;

  viewDetails(id: string) {
    this.router.navigate(['product', id]);
  }
}

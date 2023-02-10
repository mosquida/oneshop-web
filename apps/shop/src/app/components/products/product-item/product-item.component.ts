import { Component, Input } from '@angular/core';
import { Product } from '@oneshop-web/products';

@Component({
  selector: 'oneshop-web-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent {
  @Input() product: Product;
}

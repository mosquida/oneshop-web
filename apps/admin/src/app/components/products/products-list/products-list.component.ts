import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@oneshop-web/products';
@Component({
  selector: 'oneshop-web-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this._getProducts();
  }

  private _getProducts() {
    this.productsService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  editProducts(id) {}

  deleteProducts(id) {}
}

import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from '@oneshop-web/products';

@Component({
  selector: 'shop-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    });
  }
}

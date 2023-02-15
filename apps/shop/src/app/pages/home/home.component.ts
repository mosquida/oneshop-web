import { Component, OnInit, ViewChild } from '@angular/core';
import { Product, ProductsService } from '@oneshop-web/products';
import { CategoryFilterMobileComponent } from '../../components/categories/category-filter-mobile/category-filter-mobile.component';

@Component({
  selector: 'shop-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  @ViewChild(CategoryFilterMobileComponent) categoryFilterMobileComponent;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    });
  }

  trigger() {
    this.categoryFilterMobileComponent.toggleFilter();
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '@oneshop-web/orders';
import { Product, ProductsService } from '@oneshop-web/products';

@Component({
  selector: 'oneshop-web-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  product: Product;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this._getProduct();
  }

  private _getProduct(): void {
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.productsService
          .getProduct(params.id)
          .subscribe((product: Product) => {
            this.product = product;
          });
      }
    });
  }

  addToCart(productId: string, quantity: number): void {
    this.cartService.addCartItem(productId, quantity);
    alert(2);
  }
}

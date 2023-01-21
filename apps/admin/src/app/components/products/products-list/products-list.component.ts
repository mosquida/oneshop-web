import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '@oneshop-web/products';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'oneshop-web-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products = [];

  constructor(
    private productsService: ProductsService,
    private messageService: MessageService,
    private router: Router,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this._getProducts();
  }

  private _getProducts() {
    this.productsService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  editProduct(id: string): void {
    // Redirect to product form
    this.router.navigateByUrl(`/products/edit/${id}`);
  }

  deleteProduct(id: string): void {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.productsService.deleteProduct(id).subscribe({
          complete: () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Confirmed',
              detail: 'Category Deleted',
            });

            this._getProducts();
          },
          error: () => {
            this.messageService.add({
              severity: 'danger',
              summary: 'Error',
              detail: 'Category Not Deleted',
            });
          },
        });
      },
    });
  }
}

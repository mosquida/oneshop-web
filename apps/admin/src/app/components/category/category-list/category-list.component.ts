import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService, Category } from '@oneshop-web/categories';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'oneshop-web-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];

  constructor(
    private categoriesService: CategoriesService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router
  ) {}

  // Start on component load
  // subscribe = observe if data is available, then use it, like async .then()
  ngOnInit(): void {
    this._getCategories();
  }

  _getCategories(): void {
    this.categoriesService
      .getCategories()
      .subscribe((categories) => (this.categories = categories));
  }

  editCategory(id: string): void {
    // Redirect to category form
    this.router.navigateByUrl(`/category/edit/${id}`);
  }

  deleteCategory(id: string): void {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.categoriesService.deleteCategory(id).subscribe({
          complete: () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Confirmed',
              detail: 'Category Deleted',
            });

            this._getCategories();
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

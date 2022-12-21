import { Component, OnInit } from '@angular/core';
import { CategoriesService, Category } from '@oneshop-web/categories';

@Component({
  selector: 'oneshop-web-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoriesService: CategoriesService) {}

  // Start on component load
  // subscribe = observe if data is available, then use it, like async .then()
  ngOnInit(): void {
    this.categoriesService
      .getCategories()
      .subscribe((categories) => (this.categories = categories));
  }
}

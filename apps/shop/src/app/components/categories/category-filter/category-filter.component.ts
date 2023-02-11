import { Component, OnInit } from '@angular/core';
import { CategoriesService, Category } from '@oneshop-web/categories';

@Component({
  selector: 'oneshop-web-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss'],
})
export class CategoryFilterComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit() {
    this.categoriesService
      .getCategories()
      .subscribe((categories) => (this.categories = categories));
  }

  categoryFilter(id: string) {
    alert(id);
  }
}

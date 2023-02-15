import { Component, OnInit } from '@angular/core';
import { CategoriesService, Category } from '@oneshop-web/categories';

@Component({
  selector: 'oneshop-web-category-filter-mobile',
  templateUrl: './category-filter-mobile.component.html',
  styleUrls: ['./category-filter-mobile.component.scss'],
})
export class CategoryFilterMobileComponent implements OnInit {
  categories: Category[] = [];
  toggle = true;

  constructor(private categoriesService?: CategoriesService) {}

  ngOnInit() {
    this.categoriesService
      .getCategories()
      .subscribe((categories) => (this.categories = categories));
  }

  toggleFilter() {
    this.toggle = !this.toggle;
  }
}

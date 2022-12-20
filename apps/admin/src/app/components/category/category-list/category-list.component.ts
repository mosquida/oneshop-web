import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'oneshop-web-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  categories = [
    {
      id: '1',
      name: 'John',
      quantity: '2',
    },
    {
      id: '1',
      name: 'John',
      quantity: '2',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

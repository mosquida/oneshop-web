import { Route } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { ShellComponent } from './pages/shell/shell.component';
import { CategoryFormComponent } from './components/category/category-form/category-form.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { ProductsFormComponent } from './components/products/products-form/products-form.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'category',
        component: CategoryListComponent,
      },
      {
        path: 'category/new',
        component: CategoryFormComponent,
      },
      {
        path: 'category/edit/:id',
        component: CategoryFormComponent,
      },

      {
        path: 'products',
        component: ProductsListComponent,
      },
      {
        path: 'products/new',
        component: ProductsFormComponent,
      },
    ],
  },
];

import { Route } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { ShellComponent } from './pages/shell/shell.component';
import { CategoryFormComponent } from './components/category/category-form/category-form.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { ProductsFormComponent } from './components/products/products-form/products-form.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { UsersFormComponent } from './components/users/users-form/users-form.component';
import { OrdersListComponent } from './components/orders/orders-list/orders-list.component';
import { OrdersDetailsComponent } from './components/orders/orders-details/orders-details.component';
import { AdminGuard } from '@oneshop-web/auth';

export const appRoutes: Route[] = [
  {
    path: '',
    component: ShellComponent,
    canActivate: [AdminGuard],
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
      {
        path: 'products/edit/:id',
        component: ProductsFormComponent,
      },
      {
        path: 'users',
        component: UsersListComponent,
      },
      {
        path: 'users/new',
        component: UsersFormComponent,
      },
      {
        path: 'users/edit/:id',
        component: UsersFormComponent,
      },
      {
        path: 'orders',
        component: OrdersListComponent,
      },
      {
        path: 'orders/:id',
        component: OrdersDetailsComponent,
      },
    ],
  },
];

import { Route } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { ShellComponent } from './pages/shell/shell.component';

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
    ],
  },
];

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ConfirmationService, MessageService } from 'primeng/api';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ShellComponent } from './pages/shell/shell.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { CategoryFormComponent } from './components/category/category-form/category-form.component';
import { InputTextModule } from 'primeng/inputtext';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { EditorModule } from 'primeng/editor';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { FieldsetModule } from 'primeng/fieldset';

import { CategoriesService } from '@oneshop-web/categories';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { ProductsFormComponent } from './components/products/products-form/products-form.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { UsersFormComponent } from './components/users/users-form/users-form.component';
import { OrdersListComponent } from './components/orders/orders-list/orders-list.component';
import { OrdersDetailsComponent } from './components/orders/orders-details/orders-details.component';

const PRIMENG_MODULE = [
  InputTextModule,
  ButtonModule,
  CardModule,
  ToolbarModule,
  TableModule,
  ColorPickerModule,
  ToastModule,
  ConfirmDialogModule,
  InputTextareaModule,
  InputNumberModule,
  InputSwitchModule,
  EditorModule,
  DropdownModule,
  FileUploadModule,
  FieldsetModule,
];

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    SidebarComponent,
    DashboardComponent,
    ShellComponent,
    CategoryListComponent,
    CategoryFormComponent,
    ProductsListComponent,
    ProductsFormComponent,
    UsersListComponent,
    UsersFormComponent,
    OrdersListComponent,
    OrdersDetailsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ...PRIMENG_MODULE,
  ],
  providers: [ConfirmationService, MessageService, CategoriesService],
  bootstrap: [AppComponent],
})
export class AppModule {}

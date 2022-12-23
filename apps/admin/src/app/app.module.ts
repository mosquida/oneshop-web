import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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

const PRIMENG_MODULE = [
  InputTextModule,
  ButtonModule,
  CardModule,
  ToolbarModule,
  TableModule,
  ColorPickerModule,
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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

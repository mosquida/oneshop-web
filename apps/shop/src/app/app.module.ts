import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { UiModule } from '@oneshop-web/ui';

import { ButtonModule } from 'primeng/button';
import { CategoryFilterComponent } from './components/categories/category-filter/category-filter.component';
import { ProductItemComponent } from './components/products/product-item/product-item.component';
import { CategoryFilterMobileComponent } from './components/categories/category-filter-mobile/category-filter-mobile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products-list', component: ProductsListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    HomeComponent,
    ProductsListComponent,
    HeaderComponent,
    FooterComponent,
    CategoryFilterComponent,
    ProductItemComponent,
    CategoryFilterMobileComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    UiModule,
    BrowserAnimationsModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

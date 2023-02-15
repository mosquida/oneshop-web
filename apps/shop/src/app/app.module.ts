import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { UiModule } from '@oneshop-web/ui';

import { ButtonModule } from 'primeng/button';
import { CategoryFilterComponent } from './components/categories/category-filter/category-filter.component';
import { ProductItemComponent } from './components/products/product-item/product-item.component';
import { CategoryFilterMobileComponent } from './components/categories/category-filter-mobile/category-filter-mobile.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mycart', component: CartComponent },
  { path: 'product/:id', component: ProductPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CategoryFilterComponent,
    ProductItemComponent,
    CategoryFilterMobileComponent,
    ProductPageComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
    UiModule,
    BrowserAnimationsModule,
    ButtonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

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
import { BadgeModule } from 'primeng/badge';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxStripeModule } from 'ngx-stripe';

import { ButtonModule } from 'primeng/button';
import { CategoryFilterComponent } from './components/categories/category-filter/category-filter.component';
import { ProductItemComponent } from './components/products/product-item/product-item.component';
import { CategoryFilterMobileComponent } from './components/categories/category-filter-mobile/category-filter-mobile.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { CartComponent } from './pages/cart/cart.component';
import { OrdersModule } from '@oneshop-web/orders';
import { InputNumberModule } from 'primeng/inputnumber';
import { CartItemsComponent } from './components/cart/cart-items/cart-items.component';
import { TotalOrdersComponent } from './components/cart/total-orders/total-orders.component';
import { InputTextModule } from 'primeng/inputtext';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { SuccessComponent } from './pages/success/success.component';
import { AuthGuard, AuthModule, JwtInterceptor } from '@oneshop-web/auth';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UsersFacade, UsersModule } from '@oneshop-web/users';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mycart', component: CartComponent },
  { path: 'product/:id', component: ProductPageComponent },
  { path: 'checkout', canActivate: [AuthGuard], component: CheckoutComponent },
  { path: 'success', component: SuccessComponent },
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
    CartItemsComponent,
    TotalOrdersComponent,
    CheckoutComponent,
    SuccessComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
    UiModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    ButtonModule,
    HttpClientModule,
    OrdersModule,
    BadgeModule,
    InputNumberModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    AuthModule,
    UsersModule,
    NgxStripeModule.forRoot('pk_test_51N1AH8IZfMO7HnKKOBu3Cc5sk24Ui8CC2KaZzemer2486tW4Dw0fjIBteOdx5zJeLXSTXZbCVCH7JbbEOzoB3Gza0063uacg9v')
  ],
  providers: [
    UsersFacade,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

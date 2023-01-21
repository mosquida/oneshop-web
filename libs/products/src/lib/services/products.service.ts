import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { config } from '../../config';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${config.API_URL}/products`);
  }

  getProduct(id: string): Observable<Product> | Observable<unknown> {
    return this.http.get<Product>(`${config.API_URL}/products/${id}`);
  }

  createProduct(product: FormData): Observable<Product> {
    return this.http.post<Product>(`${config.API_URL}/products`, product);
  }

  updateProduct(id: string, product: FormData): Observable<Product> {
    return this.http.put<Product>(`${config.API_URL}/products/${id}`, product);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${config.API_URL}/products/${id}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { config } from '../../config';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${config.API_URL}/categories`);
  }

  getCategory(id: string | unknown): Observable<Category> {
    return this.http.get<Category>(`${config.API_URL}/categories/${id}`);
  }

  createCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(`${config.API_URL}/categories`, category);
  }

  updateCategory(id: string, category: Category): Observable<Category> {
    return this.http.put<Category>(
      `${config.API_URL}/categories/${id}`,
      category
    );
  }

  deleteCategory(id: string) {
    return this.http.delete(`${config.API_URL}/categories/${id}`);
  }
}

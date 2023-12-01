import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  BASE_URL = 'https://fakestoreapi.com';
  selectedCategory: string = '';

  sort = new BehaviorSubject<{
    alphabet?: string;
    limit?: string;
    category?: string;
  }>({
    alphabet: 'desc',
    limit: '12',
  });

  constructor(private http: HttpClient) {}

  getAllProduct(category?: string): Observable<Array<Product>> {
    return this.sort.pipe(
      switchMap(({ alphabet, limit, category }) =>
        this.http.get<Array<Product>>(
          `${this.BASE_URL}/products${
            category ? '/category/' + category : ''
          }?limit=${limit}&sort=${alphabet}`
        )
      )
    );
  }

  getAllCategories(): Observable<Array<string>> {
    return this.http.get<Array<string>>(`${this.BASE_URL}/products/categories`);
  }

  updateSort(newSort: string, newLimit: string) {
    this.sort.next({
      alphabet: newSort,
      limit: newLimit,
      category: this.selectedCategory,
    });
  }

  updateFilter(newFilter: string) {
    if (newFilter !== 'All') {
      this.sort.next({ category: newFilter });
      this.selectedCategory = newFilter;
    }
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  BASE_URL = 'https://fakestoreapi.com';
  sort = new BehaviorSubject<string>('desc');

  constructor(private http: HttpClient) {}

  getAllProduct(
    limit: string,
    sort: string,
    category?: string
  ): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(
      `${this.BASE_URL}/products${
        category ? '/category/' + category : ''
      }?limit=${limit}&sort=${sort}`
    );
  }

  getAllCategories(): Observable<Array<string>> {
    return this.http.get<Array<string>>(`${this.BASE_URL}/products/categories`);
  }

  updateSort(newSort: string) {
    this.sort.next(newSort);
  }
}

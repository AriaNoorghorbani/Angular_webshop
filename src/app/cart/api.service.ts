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
  private sort = new BehaviorSubject<string>('desc');

  constructor(private http: HttpClient) {}

  getAllProduct(limit: string, category?: string): Observable<Array<Product>> {
    return this.sort.pipe(
      switchMap((sort) =>
        this.http.get<Array<Product>>(
          `${this.BASE_URL}/products${
            category ? '/category/' + category : ''
          }?limit=${limit}&sort=${sort}`
        )
      )
    );
  }

  getAllCategories(): Observable<Array<string>> {
    return this.http.get<Array<string>>(`${this.BASE_URL}/products/categories`);
  }

  updateSort(newSort: string) {
    this.sort.next(newSort);
  }
}

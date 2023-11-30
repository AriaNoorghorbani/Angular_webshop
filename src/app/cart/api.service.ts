import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService implements OnDestroy {
  BASE_URL = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) {}

  getAllProduct(limit: string, sort: string): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(
      `${this.BASE_URL}/products?limit=${limit}&sort=${sort}`
    );
  }

  ngOnDestroy(): void {}
}

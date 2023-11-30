import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  BASE_URL = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) {}

  getAllProduct(limit: string, sort: string): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(
      `${this.BASE_URL}/products?limit=${limit}&sort=${sort}`
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponse } from '../../models/products.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  // getNewArrivals(): Observable<ProductResponse> {
  //   return this.httpClient.get<ProductResponse>(
  //     'http://localhost:4201/api/products/NewArrivals'
  //   );
  // }
  getNewProducts() {
    return this.httpClient.get('http://localhost:3000/products?_limit=10');
  }

  getProducts() {
    return this.httpClient.get('http://localhost:3000/products');
  }

  addProduct(product: any) {
    return this.httpClient.post(
      'http://localhost:4201/api/products/addProduct',
      product
    );
  }
}

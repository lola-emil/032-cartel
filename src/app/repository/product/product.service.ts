import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getNewArrivals() {
    return this.httpClient.get("http://localhost:3000/products?_limit=3");
  }

  getProducts() {
    return this.httpClient.get("http://localhost:3000/products");
  }
}

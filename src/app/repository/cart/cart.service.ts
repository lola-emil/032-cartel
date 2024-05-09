import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type Cart = {
  id: number,
  name: string,
  img: string,
  price: number,
  qty: number,
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  addCartItem(data: any): Observable<Cart> {
    return this.http.post<Cart>("http://localhost:4201/cart", data);
  }

  getCartItems(): Observable<Cart[]> {
    return this.http.get<Cart[]>("http://localhost:3000/cart");
  }

  updateQuantity(id: number, quantity: number): Observable<Cart> {
    return this.http.patch<Cart>(`http://localhost:3000/cart/${id}`, {qty: quantity});
  }

  deleteItem(id: number): Observable<Cart> {
    return this.http.delete<Cart>(`http://localhost:3000/cart/${id}`);
  }
}

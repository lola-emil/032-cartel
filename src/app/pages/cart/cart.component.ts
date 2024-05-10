import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { CartService, Cart } from '../../repository/cart/cart.service';
import { NgFor } from '@angular/common';
import { ShippingService } from '../../repository/shipping/shipping.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NavComponent, NgFor],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private shippingService: ShippingService
  ) {}

  cartItems!: Cart[];
  total!: any;

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((response) => {
      this.cartItems = response;
      if (this.cartItems) {
        this.total = this.cartItems.map((item) => {
          return item.price * item.qty;
        });
      }
    });
  }

  increaseQuantity(id: number, currQuantity: number) {
    this.cartService
      .updateQuantity(id, currQuantity + 1)
      .subscribe((_response) => {
        this.ngOnInit();
      });
  }

  decreaseQuantity(id: number, currQuantity: number) {
    this.cartService
      .updateQuantity(id, currQuantity - 1)
      .subscribe((_response) => {
        this.ngOnInit();
      });
  }

  deleteItem(id: number) {
    this.cartService.deleteItem(id).subscribe((response) => {
      console.log(response);
      this.ngOnInit();
    });
  }

  getTotal(prices: any) {
    let sum = 0;
    for (const price of prices) {
      sum += price;
    }
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'PHP',
    });
    return formatter.format(sum);
  }
}

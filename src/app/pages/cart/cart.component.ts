import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { CartService, Cart } from '../../repository/cart/cart.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NavComponent, NgFor],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) {}

  cartItems!: Cart[];

  ngOnInit(): void {
    this.cartService.getCartItems()
    .subscribe(response => {
      this.cartItems = response;
    });
  }

  increaseQuantity(id: number, currQuantity: number) {
    this.cartService.updateQuantity(id, currQuantity + 1)
    .subscribe(_response => {
      this.ngOnInit();
    });
  }

  decreaseQuantity(id: number, currQuantity: number) {
    this.cartService.updateQuantity(id, currQuantity - 1)
    .subscribe(_response => {
      this.ngOnInit();
    });
  }

  deleteItem(id: number) {
    this.cartService.deleteItem(id)
    .subscribe(response => {
      console.log(response);
      this.ngOnInit();
    })
  }
}

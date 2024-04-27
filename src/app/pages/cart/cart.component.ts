import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { CartService } from '../../repository/cart/cart.service';
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

  cartItems: any;

  ngOnInit(): void {
    this.cartService.getCartItems()
    .subscribe(response => {
      this.cartItems = response;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { NgFor } from '@angular/common';
import { ProductService } from '../../repository/product/product.service';
import { Cart, CartService } from '../../repository/cart/cart.service';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [NavComponent, ProductCardComponent, NgFor],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  products: any;

  ngOnInit(): void {
    this.productService.getProducts()
    .subscribe(response => {
      this.products = response;
    });
  }

  addToCart(cart: Cart) {
    this.cartService.addCartItem({
      img: cart.img,
      name: cart.name,
      price: cart.price,
      qty: 1
    }).subscribe(response => {
      console.log(response);
    })
  }
}

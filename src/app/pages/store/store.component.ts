import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { NgFor } from '@angular/common';
import { ProductService } from '../../repository/product/product.service';
import { Cart, CartService } from '../../repository/cart/cart.service';
import { JwtService } from '../../service/JwtService';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [NavComponent, ProductCardComponent, NgFor],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css',
})
export class StoreComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private jwtService: JwtService
  ) {}

  products: any;

  ngOnInit(): void {
    this.productService.getProducts().subscribe((response) => {
      this.products = response;
    });
  }

  addToCart(cart: Cart) {
    this.cartService
      .addCartItem({
        userId: this.jwtService.getUserId(),
        productId: this.products.id,
        quantity: 1,
      })
      .subscribe((response: any) => {
        console.log(response);
      });
  }
}

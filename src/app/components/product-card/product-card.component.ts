import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../../repository/cart/cart.service';
import { UserService } from '../../repository/user/user.service';
import { JwtService } from '../../service/JwtService';
import { CartModel } from '../../models/cart.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() id!: string;
  @Input() image!: string;
  @Input() name!: string;
  @Input() price!: number;

  constructor(
    private cartService: CartService,
    private jwtService: JwtService
  ) {}

  // @Output() cartClicked = new EventEmitter();

  addToCart() {
    let item: CartModel = {
      userId: this.jwtService.getUserId(),
      productId: 1,
      quantity: 1,
    };

    this.cartService.addCartItem(item).subscribe((response: any) => {
      console.log(response);
    });
  }
}

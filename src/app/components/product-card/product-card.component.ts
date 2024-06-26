import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() id!: string;
  @Input() image!: string;
  @Input() name!: string;
  @Input() price!: number;

  @Output() cartClicked = new EventEmitter();

  addToCart() {
    this.cartClicked.emit();
  }
}

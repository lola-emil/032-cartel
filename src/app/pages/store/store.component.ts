import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { NgFor } from '@angular/common';
import { ProductService } from '../../repository/product/product.service';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [NavComponent, ProductCardComponent, NgFor],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent implements OnInit {

  constructor(private productService: ProductService) {}

  products: any;

  ngOnInit(): void {
    this.productService.getProducts()
    .subscribe(response => {
      this.products = response;
    });
  }


}

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../repository/product/product.service';

@Component({
  selector: 'app-productlistpage',
  standalone: true,
  imports: [],
  templateUrl: './productlistpage.component.html',
  styleUrl: './productlistpage.component.css',
})
export class ProductlistpageComponent implements OnInit {
  constructor(private productService: ProductService) {}
  products: any;
  ngOnInit(): void {
    this.productService.getProducts().subscribe((response) => {
      this.products = response;
    });
  }
}

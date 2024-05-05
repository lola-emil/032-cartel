import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ProductService } from '../../repository/product/product.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

import Swiper from 'swiper';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NavComponent, ProductCardComponent, NgFor, RouterLink],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {
  constructor(private productService: ProductService) {}

  products: any = [];
  ngOnInit(): void {
    this.productService.getNewArrivals()
    .subscribe(response => {


      const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10
          }
        }
      });


      this.products = response;
    })
  }

}

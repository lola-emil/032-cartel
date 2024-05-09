import { Component } from '@angular/core';
import { AdminSideNavComponent } from '../../../../components/admin-side-nav/admin-side-nav.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgStyle } from '@angular/common';
import { ProductService } from '../../../../repository/product/product.service';
import { JwtService } from '../../../../service/JwtService';

@Component({
  selector: 'app-addproductpage',
  standalone: true,
  imports: [AdminSideNavComponent, NgIf, ReactiveFormsModule, NgStyle],
  templateUrl: './addproductpage.component.html',
  styleUrl: './addproductpage.component.css',
})
export class AddproductpageComponent {
  constructor(
    private productService: ProductService,
    private jwtService: JwtService
  ) {}

  errorMessage: any = '';

  productForm = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    price: new FormControl(),
    category: new FormControl(),
    createdby: new FormControl(),
  });

  addProduct() {
    this.productForm.patchValue({
      category: 1,
      createdby: this.jwtService.getUserId(),
    });
    this.productService.addProduct(this.productForm.value).subscribe({
      next: (data) => {
        console.log(data);
        this.errorMessage = '';
      },
    });
  }
}

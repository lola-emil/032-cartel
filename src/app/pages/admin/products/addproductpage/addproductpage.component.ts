import { Component } from '@angular/core';
import { AdminSideNavComponent } from '../../../../components/admin-side-nav/admin-side-nav.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ProductService } from '../../../../repository/product/product.service';

@Component({
  selector: 'app-addproductpage',
  standalone: true,
  imports: [AdminSideNavComponent, NgIf, ReactiveFormsModule],
  templateUrl: './addproductpage.component.html',
  styleUrl: './addproductpage.component.css',
})
export class AddproductpageComponent {
  constructor(private productService: ProductService) {}
  errorMessage: any = '';

  productForm = new FormGroup({
    productName: new FormControl(),
    description: new FormControl(),
    price: new FormControl(),
  });

  addProduct() {
    this.productService.addProduct(this.productForm.value).subscribe({
      next: (data) => {
        console.log(data);
        this.errorMessage = '';
      },
    });
  }
}

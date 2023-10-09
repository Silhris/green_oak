import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';

import { Product } from '@models/product';
import { ProductsService } from '@models/service/products.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    ButtonModule,
    CommonModule,
    ImageModule
  ],
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {
  product!: Product;

  constructor(
    private productsService: ProductsService,
    private router: ActivatedRoute) {}

  ngOnInit() {
    const id = this.router.snapshot.paramMap.get('id');
    this.product = this.productsService.getProduct(id);
  }
}

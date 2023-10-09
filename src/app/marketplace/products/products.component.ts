import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionModule } from 'primeng/accordion';

import { Product } from '@models/product';
import { ProductsService } from '@models/service/products.service';
import { CardComponent } from '@app/marketplace/products/card/card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    AccordionModule,
    CardComponent,
    CommonModule
  ],
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  private products!: Product[];
  arbustes_fruitiers!: Product[];
  arbres_fruitiers!: Product[];
  coniferes!: Product[];
  quercus!: Product[];
  plants_truffiers!: Product[];

  constructor(private productsService: ProductsService) {
    this.products = productsService.getProducts();
  }

  ngOnInit() {
    this.arbustes_fruitiers = this.products.filter((product) => {
      return product.category === 'arbustes_fruitiers';
    });
    this.arbres_fruitiers = this.products.filter((product) => {
      return product.category === 'arbres_fruitiers';
    });
    this.coniferes = this.products.filter((product) => {
      return product.category === 'coniferes';
    });
    this.quercus = this.products.filter((product) => {
      return product.category === 'quercus';
    });
    this.plants_truffiers = this.products.filter((product) => {
      return product.category === 'plants_truffiers';
    });
  }
}

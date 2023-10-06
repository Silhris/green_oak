import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';

import { Product } from '@app/models/product';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    ButtonModule,
    CardModule,
    CommonModule,
    ImageModule,
    RouterLink
  ],
  templateUrl: './card.component.html'
})
export class CardComponent {
  @Input() products!: Product[];
}

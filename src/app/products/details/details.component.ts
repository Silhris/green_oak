import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { ImageModule } from 'primeng/image';

import { Product } from '@app/models/product';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    ImageModule,
    RouterLink
  ],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})
export class DetailsComponent {
  product: Product = {
    id: 1,
    category: 'plants_truffiers',
    name: 'Chêne Vert Truffier Tuber Mélanosporum (quercus ilex)',
    image: 'assets/images/products/truffiers/chene-truffier-pubescent-tuber-melanosporum-quercus-pubescens.jpg', price: 1595,
    description: 'Jeune plant truffier de chêne pubescent (Quercus pubescens) aussi appelé chêne blanc mycorhizé par tuber mélanosporum de 2 ans en godets anti-chignon de 450cc. Contrôlé et certifié par le CTIFL.'
  };
}

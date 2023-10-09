import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleriaModule } from 'primeng/galleria';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    CommonModule,
    GalleriaModule,
    TooltipModule
  ],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.less']
})
export class GalleryComponent {
  images: any[] = [
    {
      "previewImageSrc": "assets/images/_6d5dfa87-ed1a-4aaa-bcc3-6f3edc407033.jpg",
      "thumbnailImageSrc": "assets/images/_6d5dfa87-ed1a-4aaa-bcc3-6f3edc407033.jpg",
      "alt": "Une coopérative d'agriculteur de Green Oak Corporation",
      "title": "Présentation de l'entreprise Green Oak Corporation"
    },
    {
      "previewImageSrc": "assets/images/_886bb36c-3d21-460d-8b5c-ed79a783477d.jpg",
      "thumbnailImageSrc": "assets/images/_886bb36c-3d21-460d-8b5c-ed79a783477d.jpg",
      "alt": "Diverses graines vendus par Green Oak Corporation",
      "title": "Produits Green Oak Corporation"
    },
    {
      "previewImageSrc": "assets/images/_5081e0ca-7c1a-4c43-9d6a-271aac6eb205.jpg",
      "thumbnailImageSrc": "assets/images/_5081e0ca-7c1a-4c43-9d6a-271aac6eb205.jpg",
      "alt": "Diverses explications à propos des graines vendus par Green Oak Corporation",
      "title": "Comment bien utiliser les graines de Green Oak Corporation"
    },
    {
      "previewImageSrc": "assets/images/_a660e138-66f2-4246-b317-92e62a32c27a.jpg",
      "thumbnailImageSrc": "assets/images/_a660e138-66f2-4246-b317-92e62a32c27a.jpg",
      "alt": "Une planète entourée d'arbres et d'un homme entretenant son potager",
      "title": "Conseils pour être un acteur éco-responsable"
    },
    {
      "previewImageSrc": "assets/images/_aaf1123b-95e8-4d49-a82c-2865b2481fd8.jpg",
      "thumbnailImageSrc": "assets/images/_aaf1123b-95e8-4d49-a82c-2865b2481fd8.jpg",
      "alt": "Des graines vendus par Green Oak Corporation",
      "title": "Explications à propos des graines vendus par Green Oak Corporation"
    },
    {
      "previewImageSrc": "assets/images/_fcca6dbb-4e98-4932-8cea-9798d92a2395.jpg",
      "thumbnailImageSrc": "assets/images/_fcca6dbb-4e98-4932-8cea-9798d92a2395.jpg",
      "alt": "Des industries entourées d'arbres",
      "title": "L'industrie 4.0 éco-responsable"
    }
  ];
}

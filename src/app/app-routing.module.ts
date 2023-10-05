import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from '@app/products/products.component';
import { ShowcaseComponent } from '@app/showcase/showcase.component';
import { GalleryComponent } from '@app/gallery/gallery.component';
import { ServicesComponent } from '@app/services/services.component';
import { ContactComponent } from '@app/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'showcase', pathMatch: 'full' },
  { path: 'showcase', component: ShowcaseComponent, title: 'Accueil' },
  { path: 'gallery', component: GalleryComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products', component: ProductsComponent, children: [
      { path: ':id', component: ProductsComponent }
    ]
  },
  // Utiliser children dans products pour cibler un prdouit
  //{ path: 'products/:id', component: TODO }
  // Redirige toutes les routes invalides vers l'accueil
  // A placer en dernier pour qu'Angular puisse vérifier chacune des précédentes routes
  { path: '**', redirectTo: 'showcase' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

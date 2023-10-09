import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowoffComponent } from './showoff.component';

import { GalleryComponent } from '@app/showoff/gallery/gallery.component';

const routes: Routes = [
  { path: 'gallery', component: GalleryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowoffRoutingModule { }

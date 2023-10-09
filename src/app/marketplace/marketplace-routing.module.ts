import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketplaceComponent } from './marketplace.component';

import { ProductsComponent } from '@app/marketplace/products/products.component';
import { DetailsComponent } from '@app/marketplace/products/details/details.component';

const routes: Routes = [
  { path: '', component: MarketplaceComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketplaceRoutingModule { }

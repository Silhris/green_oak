import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'lobby/showcase', pathMatch: 'full' },
  { path: 'lobby', loadChildren: () => import('./lobby/lobby.module').then(m => m.LobbyModule) },
  { path: 'showoff', loadChildren: () => import('./showoff/showoff.module').then(m => m.ShowoffModule) },
  { path: 'marketplace', loadChildren: () => import('./marketplace/marketplace.module').then(m => m.MarketplaceModule) },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'services', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule) },
  // Redirige toutes les routes invalides vers l'accueil
  // A placer en dernier pour qu'Angular puisse vérifier chacune des précédentes routes
  { path: '**', redirectTo: 'lobby/showcase' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

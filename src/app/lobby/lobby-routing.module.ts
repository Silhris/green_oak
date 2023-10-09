import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LobbyComponent } from './lobby.component';

import { ShowcaseComponent } from '@app/lobby/showcase/showcase.component';

const routes: Routes = [
  { path: 'showcase', component: ShowcaseComponent, title: 'Accueil' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LobbyRoutingModule { }

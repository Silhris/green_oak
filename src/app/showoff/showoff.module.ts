import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowoffRoutingModule } from './showoff-routing.module';
import { ShowoffComponent } from './showoff.component';


@NgModule({
  declarations: [
    ShowoffComponent
  ],
  imports: [
    CommonModule,
    ShowoffRoutingModule
  ]
})
export class ShowoffModule { }

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';

@Component({
  selector: 'app-top-banner',
  standalone: true,
  imports: [
    CommonModule,
    TabMenuModule
  ],
  template: `<div id="top-banner-background">
    <div id="overlay-text">Green Oak Corporation</div>
    <p-tabMenu [model]="getItems()" [activeItem]="getActiveItem()"></p-tabMenu>
  </div>`,
  styleUrls: ['./top-banner.component.less'],
})
export class TopBannerComponent implements OnInit {
  private items: MenuItem[] = [
     { label: 'Accueil', icon : 'pi pi-home', routerLink: 'lobby/showcase' },
     { label: 'Galerie', icon: 'pi pi-images', routerLink: 'showoff/gallery' },
     { label: 'Produits', icon: 'pi pi-shopping-cart', routerLink: 'marketplace/products' },
     { label: 'Services', icon: 'pi pi-info-circle', routerLink: 'services' },
     { label: 'Contact', icon: 'pi pi-pencil', routerLink: 'about/contact' }
  ];
  private activeItem!: MenuItem;

  ngOnInit() {
    this.activeItem = this.items[0];
  }

  getItems() {
    return this.items;
  }

  getActiveItem() {
    return this.activeItem;
  }
}

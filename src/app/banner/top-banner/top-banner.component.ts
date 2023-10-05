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
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.less'],
})
export class TopBannerComponent implements OnInit {
  private items: MenuItem[] = [
     { label: 'Accueil', icon : 'pi pi-home', routerLink: 'showcase' },
     { label: 'Galerie', icon: 'pi pi-shopping-cart', routerLink: 'gallery' },
     { label: 'Produits', icon: 'pi pi-shopping-cart', routerLink: 'products' },
     { label: 'Services', icon: 'pi pi-shopping-cart', routerLink: 'services' },
     { label: 'Contact', icon: 'pi pi-pencil', routerLink: 'contact' }
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

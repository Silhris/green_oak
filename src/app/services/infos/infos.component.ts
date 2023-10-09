import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-infos',
  standalone: true,
  imports: [
    CommonModule,
    TabViewModule
  ],
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.less']
})
export class InfosComponent {

}

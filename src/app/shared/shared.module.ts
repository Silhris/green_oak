import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopBannerComponent } from '@app/shared/banner/top-banner/top-banner.component';
import { BottomBannerComponent } from '@app/shared/banner/bottom-banner/bottom-banner.component';

@NgModule({
  declarations: [],
  imports: [
    BottomBannerComponent,
    CommonModule,
    TopBannerComponent
  ],
  exports: [
    BottomBannerComponent,
    TopBannerComponent
  ]
})
export class SharedModule { }

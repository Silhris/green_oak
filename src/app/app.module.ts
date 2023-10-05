import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { TopBannerComponent } from '@app/banner/top-banner/top-banner.component';
import { BottomBannerComponent } from '@app/banner/bottom-banner/bottom-banner.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BottomBannerComponent,
    BrowserModule,
    TopBannerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

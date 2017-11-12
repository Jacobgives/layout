import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutHeaderComponent } from './layout/layout-header/layout-header.component';
import { LayoutNavComponent } from './layout/layout-nav/layout-nav.component';
import { LayouMainComponent } from './layout/layou-main/layou-main.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LayoutHeaderComponent,
    LayoutNavComponent,
    LayouMainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

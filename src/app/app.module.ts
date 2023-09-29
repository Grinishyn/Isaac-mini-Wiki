import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './core/layout/layout.module';
import { ItemsComponent } from './features/items/items.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemBoxComponent } from './shared/components/item-box/item-box.component';
import { SharedModule } from './shared/shared.module';
import { AuthorModule } from './features/author/author.module';
import { DetailsModule } from './features/details/details.module';
import { ItemsModule } from './features/items/items.module';
@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    AuthorModule,
    DetailsModule,
    ItemsModule,
    SharedModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

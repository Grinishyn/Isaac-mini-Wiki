import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemBoxComponent } from './components/item-box/item-box.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';



@NgModule({
  declarations: [ItemBoxComponent, LoadingScreenComponent],
  exports: [ItemBoxComponent, LoadingScreenComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
     path: 'home-page',
     loadChildren:()=> import('./features/home-page/home-page.module').then(m=>m.HomePageModule)
   },
   {
    path: 'items',
    loadChildren:()=> import('./features/items/items.module').then(m=>m.ItemsModule)
  },
  {
    path: 'author',
    loadChildren:()=> import('./features/author/author.module').then(m=>m.AuthorModule)
  },
  {
    path: 'details',
    loadChildren:()=> import('./features/details/details.module').then(m=>m.DetailsModule)
  },
   { path: '**', redirectTo: 'home-page'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

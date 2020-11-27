import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtelierContactComponent } from './atelier-contact/atelier-contact.component';
import { AtelierProductsComponent } from './atelier-products/atelier-products.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products', 
    component: AtelierProductsComponent
  },
  {
    path: 'contact', 
    component: AtelierContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

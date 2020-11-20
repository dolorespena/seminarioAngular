import { Component, OnInit } from '@angular/core';
import { Products } from './products';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Products[] = [
    {
      image:'assets/img/cuadernillo.jpeg',
      product:'Agenda',
      type:'Personalizada',
      price: 1200,
      stock: 2
    },
    {
      image:'assets/img/cuadernillo.jpeg',
      product:'Cuadernillo',
      type:'Estandar',
      price: 650,
      stock: 0
    },{
      image:'assets/img/cuadernillo.jpeg',
      product:'Anotadores',
      type:'Estandar',
      price: 250,
      stock: 8
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}

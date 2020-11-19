import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductssListComponent implements OnInit {

  products = {
    "image":"assets/img/cuadernillo.jpeg",
    "product":"Agenda",
    "type":"Personalizada",
    "price": 1200,
    "stock": 2
  }
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Products } from '../products-list/products';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }

  product: Products;

  ngOnInit(): void {  
  }
  
  upQuantity(product: Products): void {
    if(product.quantity < product.stock)
    product.quantity++;
  }

  downQuantity(product: Products): void {
    if(product.quantity > 0)
    product.quantity--;
  }

  changeQuantity(event, product: Products):  void {
    console.log(event.key);
  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Products } from './products-list/products';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {

  private _cartList: Products[] = [];

  cartList: BehaviorSubject<Products[]> = new BehaviorSubject([]);

  constructor() { }

  addToCart(product: Products) {
    let item: Products = this._cartList.find((v1) => v1.product == product.product)
    if(!item){
      this._cartList.push({... product});
    } else{
      item.quantity += product.quantity;
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList);
  }

}

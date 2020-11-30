import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { ProductCartService } from '../product-cart.service';
import { Products } from '../products-list/products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList$: Observable<Products[]>;

  constructor(private cart: ProductCartService) {
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }

}

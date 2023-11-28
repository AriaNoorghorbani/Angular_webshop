import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [
      {
        image: 'https://via.placeholder.com/150',
        name: 'snickers',
        price: 150,
        quantity: 2,
        id: 1,
      },
    ],
  };

  dataSource: Array<Cart> = [];

  ngOnInit() {}
}
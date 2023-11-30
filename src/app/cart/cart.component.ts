import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from '../models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [
      {
        product: 'https://via.placeholder.com/150',
        name: 'snickers',
        price: 150,
        quantity: 2,
        id: 1,
      },
      {
        product: 'https://via.placeholder.com/150',
        name: 'snickers',
        price: 250,
        quantity: 3,
        id: 2,
      },
    ],
  };

  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action',
  ];

  ngOnInit() {
    this.dataSource = this.cart.items;
  }

  getTotal(items: Array<CartItem>): number {
    return items
      .map((items) => items.price * items.quantity)
      .reduce((prev, current) => prev + current, 0);
  }
}

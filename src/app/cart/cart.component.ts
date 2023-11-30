import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from '../models/cart.model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cart: Cart = { items: [] };

  constructor(private cartService: CartService) {}

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
    this.cartService.cart.subscribe((cart: Cart) => {
      this.cart = cart;
      this.dataSource = this.cart.items;
    });
  }

  getTotal(items: Array<CartItem>): number {
    return items
      .map((items) => items.price * items.quantity)
      .reduce((prev, current) => prev + current, 0);
  }

  onClearCart() {
    this.cartService.clearCart();
  }

  onRemoveItem(item: CartItem) {
    this.cartService.removeItem(item);
  }

  onAddQuantity(element: CartItem) {
    this.cartService.addToCart(element);
  }
  onDecreaseQuantity(element: CartItem) {
    this.cartService.decreaseQuantity(element);
  }
}

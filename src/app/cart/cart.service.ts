import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = new BehaviorSubject<Cart>({ items: [] });
  itemsQuantity = new BehaviorSubject<number>(0);

  constructor(private snackBar: MatSnackBar) {}

  addToCart(item: CartItem) {
    const items = [...this.cart.value.items];

    const itemInCart = items.find((i) => i.id === item.id);

    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      items.push(item);
    }

    this.cart.next({ items });
    this.snackBar.open(item.name + ' added to cart', 'Ok', { duration: 3000 });
  }

  totalQuantity(): number {
    return this.cart.value.items
      .map((item) => item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }

  clearCart() {
    this.cart.next({ items: [] });
    this.snackBar.open('Cart is cleared', 'Ok', { duration: 3000 });
  }

  totalPriceCart(): number {
    return this.cart.value.items
      .map((items) => items.price * items.quantity)
      .reduce((prev, current) => prev + current, 0);
  }

  removeItem(item: CartItem) {
    const filteredCart = this.cart.value.items.filter((i) => i.id !== item.id);
    this.cart.next({ items: filteredCart });
    this.snackBar.open(item.name + ' is removed from cart', 'ok', {
      duration: 2000,
    });
  }

  decreaseQuantity(item: CartItem) {
    const items = [...this.cart.value.items];
    items.map((i) => {
      if (i.id === item.id) {
        i.quantity--;
        this.snackBar.open('1 ' + i.name + ' decreased from cart', 'Ok', {
          duration: 3000,
        });
        if (i.quantity == 0) {
          this.removeItem(i);
          this.snackBar.open(i.name + ' removed form cart');
        }
      }
    });
  }
}

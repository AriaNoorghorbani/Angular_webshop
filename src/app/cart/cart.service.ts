import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = new BehaviorSubject<Cart>({ items: [] });

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
    console.log(this.cart.value);
    this.snackBar.open('Added to cart', 'OK', { duration: 3000 });
  }
}

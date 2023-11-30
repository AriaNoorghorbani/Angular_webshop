import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { Cart, CartItem } from '../models/cart.model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cart: Cart = { items: [] };

  constructor(private cartService: CartService, private http: HttpClient) {}

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

  onCheckout() {
    this.http
      .post('http://localhost:4242/checkout', {
        items: this.cart.items,
      })
      .subscribe(async (res: any) => {
        let stripe = await loadStripe(
          'pk_test_51OGkjXK9ITI0FVLUfEp6zOgeUdVKRDFc4JBvkHKx9DW6ZiLLrNpNv7YcyZLSYsdIpE95O5gnReEMXkHicRfrYk8d00xXdV6YVs'
        );
        stripe?.redirectToCheckout({
          sessionId: res.id,
        });
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Cart, CartItem } from '../models/cart.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cart: Cart = { items: [] };
  itemsQuantity = 0;
  totalCart = 10;
  total = 0;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart.subscribe((cart) => {
      this.cart = cart;
      this.totalCart = this.cartService.totalPriceCart();
      this.itemsQuantity = this.cartService.totalQuantity();
    });
  }

  onClearCart() {
    this.cartService.clearCart();
  }
}

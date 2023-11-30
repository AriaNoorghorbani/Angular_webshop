import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Cart } from '../models/cart.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cart: Cart = { items: [] };
  itemsQuantity = 0;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart.subscribe((cart) => {
      this.cart = cart;
      this.itemsQuantity = this.cartService.totalQuantity();
    });
  }
}

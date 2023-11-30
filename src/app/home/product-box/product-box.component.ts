import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.scss'],
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;
  @Output() addToCart = new EventEmitter();

  product: Product | undefined = {
    id: 1,
    title: 'Snickers',
    price: 150,
    category: 'Shoes',
    description: 'A nice shoes',
    image: 'https://via.placeholder.com/150',
  };

  constructor(private cartService: CartService) {}

  onAddToCart() {
    this.cartService.addToCart({
      product: this.product!.image,
      id: this.product!.id,
      name: this.product!.title,
      price: this.product!.price,
      quantity: 1,
    });
  }
}

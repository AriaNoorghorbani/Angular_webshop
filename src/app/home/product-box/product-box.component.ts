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

  @Input() product: Product | undefined;
  @Input() index!: number;

  constructor(private cartService: CartService) {
    console.log(this.product);
  }

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

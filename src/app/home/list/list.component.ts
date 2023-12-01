import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/cart/api.service';
import { Product } from 'src/app/models/product.model';

const ROW_HEIGHT: { [id: number]: string } = {
  1: '400px',
  3: '355px',
  4: '350px',
};

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy {
  @Input() cols = 3;
  count = '12';
  category = '';
  productSubscription: Subscription | undefined;

  products: Array<Product> | undefined;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  get rowHeight(): string {
    return ROW_HEIGHT[this.cols];
  }

  getProducts() {
    this.productSubscription = this.api
      .getAllProduct(this.count, this.category)
      .subscribe((products) => (this.products = products));
  }

  ngOnDestroy(): void {
    if (this.productSubscription) {
      this.productSubscription.unsubscribe();
    }
  }
}

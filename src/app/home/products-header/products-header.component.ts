import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from 'src/app/cart/api.service';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.scss'],
})
export class ProductsHeaderComponent {
  @Output() columnCountChanged = new EventEmitter<number>();
  alphabet = 'desc';
  limit = '12';

  constructor(private api: ApiService) {}

  onSortUpdated(newAlphabet: string): void {
    this.alphabet = newAlphabet;
    this.api.updateSort(newAlphabet, this.limit);
  }

  onLimitUpdated(newLimit: string): void {
    this.limit = newLimit;
    this.api.updateSort(this.alphabet, newLimit);
  }

  onChangeColumn(colsNum: number): void {
    this.columnCountChanged.emit(colsNum);
  }
}

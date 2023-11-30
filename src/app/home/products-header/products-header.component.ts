import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from 'src/app/cart/api.service';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.scss'],
})
export class ProductsHeaderComponent {
  @Output() columnCountChanged = new EventEmitter<number>();
  sort = 'desc';
  count = '12';

  constructor(private api: ApiService) {}

  onSortUpdated(newSort: string): void {
    this.api.updateSort(newSort);
  }

  onCountMenu(newCount: string): void {
    this.count = newCount;
  }

  onChangeColumn(colsNum: number): void {
    this.columnCountChanged.emit(colsNum);
  }
}

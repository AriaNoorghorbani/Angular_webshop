import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.scss'],
})
export class ProductsHeaderComponent {
  @Output() columnCountChanged = new EventEmitter<number>();

  sort = 'desc';
  count = 12;

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }

  onCountMenu(newCount: number): void {
    this.count = newCount;
  }

  onChangeColumn(colsNum: number): void {
    this.columnCountChanged.emit(colsNum);
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/cart/api.service';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.scss'],
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnCountChanged = new EventEmitter<number>();
  alphabet = 'desc';
  limit: string = '';

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.sort.subscribe((data) => {
      if (data.limit) {
        this.limit = data.limit;
      }
    });
  }

  onSortUpdated(newAlphabet: string): void {
    this.alphabet = newAlphabet;
    this.api.updateSort(newAlphabet, this.limit);
  }

  onLimitUpdated(newLimit: string): void {
    if (this.limit !== newLimit) {
      this.limit = newLimit;
      this.api.updateSort(this.alphabet, newLimit);
    }
  }

  onChangeColumn(colsNum: number): void {
    this.columnCountChanged.emit(colsNum);
  }
}

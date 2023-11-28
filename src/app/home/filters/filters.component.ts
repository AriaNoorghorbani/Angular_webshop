import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  @Output() selectCategory = new EventEmitter<string>();

  categories = ['pc', 'laptop'];

  onSelectCategory(selectedCategory: string): void {
    this.selectCategory.emit(selectedCategory);
  }
}

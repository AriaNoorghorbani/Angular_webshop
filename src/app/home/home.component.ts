import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  columnNumber = 3;
  selectedCategory: string | undefined;

  onChangeColumn(colNum: number) {
    this.columnNumber = colNum;
  }

  onSelectCategory(category: string): void {
    this.selectedCategory = category;
    debugger;
  }
}

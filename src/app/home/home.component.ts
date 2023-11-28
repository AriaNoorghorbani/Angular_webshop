import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  columnNumber = 3;
  onChangeColumn(colNum: number) {
    alert(colNum);
    this.columnNumber = colNum;
  }
}

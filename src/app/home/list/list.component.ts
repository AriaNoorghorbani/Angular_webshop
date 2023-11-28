import { Component, Input } from '@angular/core';

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
export class ListComponent {
  @Input() cols = 3;

  get rowHeight(): string {
    return ROW_HEIGHT[this.cols];
  }
}

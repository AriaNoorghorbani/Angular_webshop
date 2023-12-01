import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/cart/api.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit, OnDestroy {
  @Output() selectCategory = new EventEmitter<string>();
  categories: string[] | undefined;
  categoriesSubscription: Subscription | undefined;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.categoriesSubscription = this.api
      .getAllCategories()
      .subscribe((getCategories) => {
        // Assuming getCategories is an array
        this.categories = ['All', ...getCategories];
      });
  }

  onSelectCategory(selectedCategory: string): void {
    this.api.updateFilter(selectedCategory);
  }

  ngOnDestroy(): void {
    if (this.categoriesSubscription) {
      this.categoriesSubscription.unsubscribe();
    }
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsHeaderComponent } from './products-header/products-header.component';
import { HomeComponent } from './home.component';

import { SharedModule } from '../shared/shared.module';
import { FiltersComponent } from './filters/filters.component';
import { ListComponent } from './list/list.component';
import { ProductBoxComponent } from './product-box/product-box.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProductsHeaderComponent,
    FiltersComponent,
    ListComponent,
    ProductBoxComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [],
})
export class HomeModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsHeaderComponent } from './products-header/products-header.component';
import { HomeComponent } from './home.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, ProductsHeaderComponent],
  imports: [CommonModule, SharedModule],
  exports: [],
})
export class HomeModule {}

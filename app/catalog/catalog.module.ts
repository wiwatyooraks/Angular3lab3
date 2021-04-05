import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { BackendService } from '../backend.service';



@NgModule({
  declarations: [ProductListComponent, ProductItemComponent, ProductDetailComponent],
  imports: [CommonModule],
  providers: [BackendService],
  exports: [ProductListComponent]
})
export class CatalogModule { }

import { Component, OnInit , ViewChild, ViewChildren, QueryList} from '@angular/core';
import { BackendService } from '../../backend.service';
import { Product } from '../../product';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @ViewChildren(ProductItemComponent)
  productItems: QueryList<ProductItemComponent>;
  products : Product[];

  constructor(private backendService: BackendService) { 
    this.products = [];
    }

  ngOnInit(): void {
    this.products = this.backendService.getProducts();
  }
  selectedProduct(productComponent: ProductItemComponent) {
    alert(`Product ${productComponent.product.name} selected`);
    this.productItems.forEach(p => {
    p.isSelected = false;
    });
    productComponent.isSelected = true;
    }
}

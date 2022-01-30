import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../../shared/base/base.component';

@Component({
  selector: 'app-grid-products',
  templateUrl: './grid-products.component.html',
  styleUrls: ['./grid-products.component.scss']
})
export class GridProductsComponent extends BaseComponent implements OnInit {

  @Input() products: any;
  @Input() model: any;
  constructor(routeS: Router) {
    super(routeS);
  }

  ngOnInit() {
  }

  getIsNew(product: any) {
    const createdDate = new Date(product.date);
    const actualDate = new Date();
    const a = createdDate.getMonth();
    const b = actualDate.getMonth();
    if ((createdDate.getFullYear() === actualDate.getFullYear()) &&
      (createdDate.getMonth() === actualDate.getMonth())) {
      return true
    }

    return false
  }

}

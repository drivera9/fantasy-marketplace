import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { BaseComponent } from '../shared/base/base.component';
declare function reloadSliders(): any;
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  type: any = '';
  products: any;

  constructor(
    routeS: Router,
    private route: ActivatedRoute,
    private productsSvc: ProductsService
  ) { 
    super(routeS);
  }

  ngOnInit() {
    this.type = this.route.snapshot.paramMap.get('type');
    this.getProducts(this.type);
    reloadSliders();
  }

  async getProducts(type: any) {
    this.products = await this.productsSvc.getProducts();
    if (type) {
      this.products = [...this.products].filter(product => product.model.id === type)
    }
  }

}

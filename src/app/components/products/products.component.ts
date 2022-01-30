import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelsService } from 'src/app/services/models.service';
import { ProductsService } from 'src/app/services/products.service';
import { BaseComponent } from '../shared/base/base.component';
declare function reloadSliders(): any;
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  modelId: any = '';
  products: any;
  model: any;

  constructor(
    routeS: Router,
    private route: ActivatedRoute,
    private productsSvc: ProductsService,
    private modelSvc: ModelsService
  ) {
    super(routeS);
  }

  ngOnInit() {
    this.modelId = this.route.snapshot.paramMap.get('type');
    this.getProducts(this.modelId);
    reloadSliders();
  }

  async getProducts(modelId: any) {
    this.products = await this.productsSvc.getProducts();
    if (modelId) {
      this.model = await this.modelSvc.getModel(this.modelId);
      this.products = [...this.products].filter(product => product.model.id === modelId)
    }
  }

  filterProducts() {

  }

}

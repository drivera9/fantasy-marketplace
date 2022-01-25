import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  type: any = '';
  products: any;

  constructor(
    private route: ActivatedRoute,
    private productsSvc: ProductsService
  ) { }

  ngOnInit() {
    this.type = this.route.snapshot.paramMap.get('type');
    this.getProducts(this.type);
  }

  async getProducts(type: any) {
    this.products = await this.productsSvc.getProducts();
    if (type) {
      this.products = [...this.products].filter(product => product.model.id === type)
    }
  }

}

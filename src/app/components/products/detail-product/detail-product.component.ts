import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CATEGORIES_DETAIL_PRODUCT } from 'src/app/model/categories.enum';
import { ProductsService } from 'src/app/services/products.service';
declare function reloadSliders(): any;
@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {

  tabSelected = CATEGORIES_DETAIL_PRODUCT.DESCRIPTION;
  CATEGORIE = CATEGORIES_DETAIL_PRODUCT;
  productID: any = '';
  product: any;
  products: any;
  featuredProducts: any;

  constructor(
    private route: ActivatedRoute,
    private productsSvc: ProductsService,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  ngOnInit() {
    this.productID = this.route.snapshot.paramMap.get('id');
    this.getProducts(this.productID);
    reloadSliders();
  }

  async getProducts(productID: any) {
    this.products = await this.productsSvc.getProducts();
    this.product = [...this.products].find(product => product.id === productID);
    this.featuredProducts = [...this.products].sort((a, b) => a.sold - b.sold).splice(0, 3)
  }

}

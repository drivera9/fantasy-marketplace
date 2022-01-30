import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CATEGORIES } from 'src/app/model/categories.enum';
import { ModelsService } from 'src/app/services/models.service';
import { ProductsService } from 'src/app/services/products.service';
import { BaseComponent } from '../shared/base/base.component';

declare function reloadSliders(): any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../css/style.css', '../../css/font-awesome.css', '../../css/easy-responsive-tabs.css'],
})
export class HomeComponent extends BaseComponent implements OnInit {

  images = [
    { path: '../assets/images/1.png' },
    { path: '../assets/images/1.png' },
    { path: '../assets/images/1.png' },
    { path: '../assets/images/1.png' },
  ];
  lastProducts: any = [];
  products: any = [];
  bestProducts: any = [];
  tabSelected: CATEGORIES = 0;
  CATEGORIE = CATEGORIES;
  models: any = [];

  constructor(
    private productsSvc: ProductsService,
    private modelsSvc: ModelsService,
    router: Router
  ) {
    super(router);
  }

  async ngOnInit() {
    this.products = await this.productsSvc.getProducts();
    this.lastProducts = [...this.products].sort((a, b) => a.date - b.date).splice(0, 2);
    this.bestProducts = [...this.products].sort((a, b) => a.sold - b.sold).splice(0, 3);
    this.getModels();
  }

  async getModels() {
    this.models = await this.modelsSvc.getModels();
    reloadSliders();
  }

  filterNewProducts() {
    return [...this.products].filter(p => {
      const a = new Date(p.date);
      const c = a.getMonth();
      const b = new Date().getMonth()
      return new Date(p.date).getMonth() === new Date().getMonth()
    }).filter(p => p.category === this.tabSelected);
  }

  selectTab(tab: any) {
    this.tabSelected = tab;
  }

}

import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from 'src/app/model/categories.enum';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../css/style.css', '../../css/font-awesome.css', '../../css/easy-responsive-tabs.css'],
  animations: [
    trigger(
      'enterAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('500ms', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('500ms', style({ transform: 'translateX(100%)', opacity: 0 }))
      ])
    ]
    )
  ],
})
export class HomeComponent implements OnInit {
  menu: any = {
    first: false,
    second: false,
    third: false
  };
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
  constructor(
    private productsSvc: ProductsService
  ) { }

  async ngOnInit() {
    debugger
    this.products = await this.productsSvc.getProducts();
    this.lastProducts = [...this.products].sort((a, b) => a.date - b.date).splice(0, 2);
    this.bestProducts = [...this.products].sort((a, b) => a.sold - b.sold).splice(0, 3);
    console.log(this.bestProducts);
  }

  openMenu(option: any) {
    for (const key in this.menu) {
      this.menu[key] = key === option ? this.menu[option] : false;
    }
    this.menu[option] = !this.menu[option];
  }

  filterNewProducts() {
    return [...this.products].filter(p => {
      const a = new Date(p.date);
      const c = a.getMonth();
      const b = new Date().getMonth()
      return new Date(p.date).getMonth() === new Date().getMonth()
     } ).filter(p => p.category === this.tabSelected);
  }

  selectTab(tab: any) {
    this.tabSelected = tab;
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent {

  constructor(
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  goTo(page: any, param?: any) {
    page === 'product' ?  window.location.href = '/product' : page.includes('detail-product') ? window.location.href = page : param ? window.location.href = '/product?filter=' + param : this.router.navigate([page]);
  }

}

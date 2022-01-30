import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../../shared/base/base.component';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent extends BaseComponent implements OnInit {

  constructor(routeS: Router) { 
    super(routeS);
  }

  ngOnInit() {
  }

}

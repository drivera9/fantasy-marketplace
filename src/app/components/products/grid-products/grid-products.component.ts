import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-products',
  templateUrl: './grid-products.component.html',
  styleUrls: ['./grid-products.component.scss']
})
export class GridProductsComponent implements OnInit {

  @Input() products: any;
  constructor() { }

  ngOnInit() {
  }

}

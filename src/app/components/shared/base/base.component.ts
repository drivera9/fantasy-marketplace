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
  ) { }

  goTo(page: any) {
    this.router.navigate([page]);
  }

}

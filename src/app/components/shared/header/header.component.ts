import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivationStart, NavigationEnd, Router } from '@angular/router';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
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
export class HeaderComponent extends BaseComponent implements OnInit {
  menu: any = {
    first: false,
    second: false,
    third: false
  };
  currentUrl = '';

  constructor(router: Router, private routerP: Router) {
    super(router);
  }

  ngOnInit() {
    this.selectCurrentUrl();
    this.routerP.events.subscribe(event => {
      if (event instanceof ActivationStart) {
        this.selectCurrentUrl();
      }
    })
  }

  selectCurrentUrl() {
    setTimeout(() => {
      this.currentUrl = this.routerP.url;
    }, 500);
  }

  openMenu(option: any) {
    for (const key in this.menu) {
      this.menu[key] = key === option ? this.menu[option] : false;
    }
    this.menu[option] = !this.menu[option];
  }

}

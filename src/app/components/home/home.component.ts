import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    debugger
  }

  openMenu(option: any) {
    for (const key in this.menu) {
      this.menu[key] = key === option ? this.menu[option] : false;
    }
    this.menu[option] = !this.menu[option];
  }

}

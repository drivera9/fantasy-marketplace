import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent extends BaseComponent implements OnInit {

  constructor(router: Router) {
    super(router);
  }

  ngOnInit() {
  }

  goToPage(page: any) {
    switch (page) {
      case 'facebook':
        window.open('https://www.facebook.com/fantasystudiocolombia', '_blank')
        break;
      case 'instagram':
        window.open('https://www.instagram.com/fantasy_studio_colombia', '_blank')
        break;
      case 'twitter':
        window.open('https://twitter.com/fantasystudiowc', '_blank')
        break;
    }
  }
}

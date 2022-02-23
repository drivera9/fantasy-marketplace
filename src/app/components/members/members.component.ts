import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModelsService } from 'src/app/services/models.service';
import { BaseComponent } from '../shared/base/base.component';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent extends BaseComponent implements OnInit {

  models: any = []
  constructor(
    private modelSvc: ModelsService,
    router: Router
  ) {
    super(router);
  }

  ngOnInit() {
    this.getModels();
  }

  async getModels() {
    this.models = await this.modelSvc.getModels();
  }

  getRowModels(position: any) {
    if (this.models.length > 1 && (this.models.length - 1) % 3 === 0) {
      const division = (this.models.length - 1) / 3;
      switch (position) {
        case 1:
          return [...this.models].slice(0, division);
        default:
          return []
      }
    }

    return position === 3 ? [] : position === 1 ? [...this.models].slice(0, ((this.models.length - 1) / 2) + 1) : [...this.models].slice(((this.models.length - 1) / 2) + 1, this.models.length);
  }

}

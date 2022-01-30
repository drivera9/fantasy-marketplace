/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ModelsService } from './models.service';

describe('Service: Models', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModelsService]
    });
  });

  it('should ...', inject([ModelsService], (service: ModelsService) => {
    expect(service).toBeTruthy();
  }));
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GridProductsComponent } from './grid-products.component';

describe('GridProductsComponent', () => {
  let component: GridProductsComponent;
  let fixture: ComponentFixture<GridProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

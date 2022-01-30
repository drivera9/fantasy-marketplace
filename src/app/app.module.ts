import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { FooterComponent } from './components/shared/footer/footer.component';
import { BaseComponent } from './components/shared/base/base.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { GridProductsComponent } from './components/products/grid-products/grid-products.component';
import { DetailProductComponent } from './components/products/detail-product/detail-product.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    GridProductsComponent,
    DetailProductComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IvyCarouselModule,
    NgbModule
  ],
  providers: [
    BaseComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

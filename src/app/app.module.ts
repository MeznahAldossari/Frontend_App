import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { UserProductsComponent } from './user-products/user-products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { SpecificProductComponent } from './specific-product/specific-product.component';
import { SubmitorderComponent } from './submitorder/submitorder.component';

@NgModule({
  declarations: [AppComponent, AllProductsComponent, UserProductsComponent, MenuComponent, SpecificProductComponent, SubmitorderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

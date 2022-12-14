import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { UserProductsComponent } from './user-products/user-products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { SpecificProductComponent } from './specific-product/specific-product.component';
import { SubmitorderComponent } from './submitorder/submitorder.component';
import { RemovemessageComponent } from './removemessage/removemessage.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';  


@NgModule({
  declarations: [AppComponent, AllProductsComponent, UserProductsComponent, MenuComponent, SpecificProductComponent, SubmitorderComponent, RemovemessageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

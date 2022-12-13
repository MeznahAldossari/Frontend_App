import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { SpecificProductComponent } from './specific-product/specific-product.component';
import { UserProductsComponent } from './user-products/user-products.component';
import { SubmitorderComponent } from './submitorder/submitorder.component';
//Need To modify endpoint for home page
const routes: Routes = [
  { path: '', component: AllProductsComponent },
  { path: 'Order_information/:id', component: SpecificProductComponent },
  { path: 'UserOrders', component: UserProductsComponent },
  { path: 'SumbitOrder', component: SubmitorderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

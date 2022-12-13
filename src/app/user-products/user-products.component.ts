import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { product_info } from '../all_models/product_data';
import { ProductOperationsService } from '../all_servcies/product-operations.service';

@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.css'],
})
export class UserProductsComponent implements OnInit {
  cart_items: product_info[] = [];

  store_data = window.localStorage;
  totalsPrice: string = '';
  costs: number = 0;
  totals: number = 0;
  name: string = '';
  user_address: string = '';
  credit: number | string = '';

  constructor(private produtcs: ProductOperationsService) {}

  ngOnInit(): void {
    this.cart_items = this.produtcs.get_items();

    //Last Updated
    this.costs = parseFloat(this.totalsPrice);
    this.costs = this.cart_items.reduce((num: number, amountValue: any) => {
      this.totals = amountValue.price * Number(amountValue.amount);
      this.totals += num;
      return this.totals;
    }, 0);
    this.costs = Number(this.costs.toFixed(2));
  }

  CheckValue: boolean = true;

  onSubmit() {
    this.CheckValue = false;
    this.store_data.clear();
  }

  delete_Order(productID: number) {
    const filtering = this.produtcs
      .get_items()
      .filter((order: product_info) => order.id !== productID);
    this.store_data.clear();
    this.store_data.setItem('myOrders', JSON.stringify(filtering));
    window.location.reload();
  }

  // to modify the option that in cart page
  selectOption(item: product_info, option: any) {
    const index = this.cart_items.findIndex((Cartid) => Cartid.id === item.id);
    if (this.cart_items.length > 0 && index != -1) {
      this.cart_items[index].amount = option;
    }
    if (this.cart_items.length > 0) {
      this.produtcs.set_items(this.cart_items);
    }

    this.costs = parseFloat(this.totalsPrice);
    this.costs = this.cart_items.reduce((num: number, amountValue: any) => {
      this.totals = amountValue.price * Number(amountValue.amount);
      this.totals += num;
      return this.totals;
    }, 0);
    this.costs = Number(this.costs.toFixed(2));
  }
}

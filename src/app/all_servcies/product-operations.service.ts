import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { product_info } from '../all_models/product_data';

@Injectable({
  providedIn: 'root',
})
export class ProductOperationsService {
  url_path: string = 'http://localhost:4200/assets/data.json';
  store_data = window.localStorage;
  products_list: product_info[] = [];

  constructor(private http_value: HttpClient) {}

  //to get all products into home page
  get_products(): Observable<product_info[]> {
    return this.http_value.get<product_info[]>(this.url_path);
  }

  // to store data into localStorage
  set_items(item: product_info[]): void {
    //I have to store it inside array in productlist page
    this.store_data.setItem('myOrders', JSON.stringify(item));
  }

  // to read items that stored in localStorage
  get_items(): product_info[] | [] {
    const get_item = this.store_data.getItem('myOrders');
    return get_item ? JSON.parse(get_item) : [];
  }

  OptionList(event: any): any {
    const valueOption = event.target[0];
    const optionValue =
      valueOption.options[event.target[0].options.selectedIndex];
    return optionValue;
  }
}

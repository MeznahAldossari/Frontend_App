import { Component, OnInit } from '@angular/core';
import { product_info } from '../all_models/product_data';
import { ProductOperationsService } from '../all_servcies/product-operations.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-specific-product',
  templateUrl: './specific-product.component.html',
  styleUrls: ['./specific-product.component.css'],
})
export class SpecificProductComponent implements OnInit {
  products_array: product_info[] = [];
  id: number = 0;
  specificOrder: product_info | null = null;
  SingleOrder: product_info | undefined;
  getID: number = 0;

  constructor(
    private products: ProductOperationsService,
    private ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe((params) => {
      this.getID = Number(params.get('id'));
      this.id = this.getID;
    });
    this.products.get_products().subscribe((response) => {
      this.products_array = response;
      this.specificOrder = this.products_array.filter(
        (SpecifciProduct) => SpecifciProduct.id === this.id
      )[0];
    });
  }

  SubmitProduct(item: product_info, OptionNumber: any): void {
    //Create Empty Array to add Products.
    let new_products_list: product_info[] = [];

    const All_cart_Products: product_info[] | [] = this.products.get_items();
    const productLenght = All_cart_Products.length;

    new_products_list = All_cart_Products;

    const optionValue = this.products.OptionList(OptionNumber);

    const idCart = All_cart_Products.findIndex(
      (id_item) => id_item.id === item.id
    );
    const productNumber = optionValue.value;

    const productModel = Object.assign(item, {
      amount: productNumber,
    });

    if (productLenght === 0 || idCart === -1) {
      new_products_list.push(productModel); // push
      this.products.set_items(new_products_list); // added into local storage
      alert(`The product added`);
    } else {
      const selectValue: string = new_products_list[idCart].amount;

      if (productNumber != selectValue) {
        new_products_list[idCart].id = item.id;
        new_products_list[idCart].amount = productNumber;
        this.products.set_items(new_products_list);
        alert(`The number of Product updated`);
      } else {
        alert(`This product exists`);
      }
    }
  }
}

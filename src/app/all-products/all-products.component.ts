import { Component, OnInit } from '@angular/core';
import { product_info } from '../all_models/product_data';
import { ProductOperationsService } from '../all_servcies/product-operations.service';
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  allProducts: product_info[] = [];

  constructor(private products: ProductOperationsService) {}

  ngOnInit(): void {
    this.products.get_products().subscribe((response) => {
      this.allProducts = response;
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

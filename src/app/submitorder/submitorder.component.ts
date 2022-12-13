import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { product_info } from '../all_models/product_data';
import { ProductOperationsService } from '../all_servcies/product-operations.service';
import { Router } from '@angular/router';
import { UserProductsComponent } from '../user-products/user-products.component';
@Component({
  selector: 'app-submitorder',
  templateUrl: './submitorder.component.html',
  styleUrls: ['./submitorder.component.css'],
})
export class SubmitorderComponent implements OnInit {
  //@ViewChild('child') child:UserProductsComponent;
  @Input() UserName: string = '';
  @Input() Total: number = 0;

  constructor(
    private produtcs: ProductOperationsService,
    private rout: Router
  ) {}

  ngOnInit(): void {}

}

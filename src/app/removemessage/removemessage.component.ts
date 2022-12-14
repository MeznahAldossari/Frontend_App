import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { ProductOperationsService } from '../all_servcies/product-operations.service';
import { product_info } from '../all_models/product_data';


@Component({
  selector: 'app-removemessage',
  templateUrl: './removemessage.component.html',
  styleUrls: ['./removemessage.component.css']
})
export class RemovemessageComponent implements OnInit {

  @Output() removeFeedback: EventEmitter<string> = new EventEmitter();
 



  

  constructor() { }

  ngOnInit(): void {
  }

  message(){
    this.removeFeedback.emit('The product will remove sucessfully Now') 
  }



}

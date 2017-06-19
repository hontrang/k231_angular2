import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { SingleProductLeftService } from "../../services/single-product-left.service";
//import {ListSingleProductLeft} from '../../models/mock_single_product_left';
declare var $:any;
@Component({
    selector: 'single-product-left',
    templateUrl: './single-product-left.component.html'
})

export class SingleProductLeftComponent implements OnInit {
    //Sử dụng service
    constructor(private list_Single_Product_Left:SingleProductLeftService) { 
        this.listSingleProductLeft=list_Single_Product_Left.get_list_single_product_left();
    }
    //Sử dụng mock
    // constructor(){
    //     this.listSingleProductLeft = ListSingleProductLeft;
    // }
    ngOnInit() { }
    //Khai báo listProduct trang SinglePage
      
    listSingleProductLeft:any[]=[
    ];
  
    list_hien_thi:any[] = [];

    

}
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
        //  {
        // "id": 1,
        // "desc": "Samsung Galaxy s5- 2015",
        // "new_price": "700.00",
        // "old_price": "100.00",
        // "image": "product-1.jpg"
        // },
        // {
        // "id": 2,
        // "desc": "Nokia Lumia 1320",
        // "new_price": "899.00",
        // "old_price": "999.00",
        // "image": "product-2.jpg"
        // },
        // {
        // "id": 3,
        // "desc": "LG Leon 2015",
        // "new_price": "400.00",
        // "old_price": "425.00",
        // "image": "product-3.jpg"
        // },
        // {
        // "id": 4,
        // "desc": "Sony microsoft",
        // "new_price": "200.00",
        // "old_price": "",
        // "image": "product-4.jpg"
        // },
        // {
        // "id": 5,
        // "desc": "iPhone 6",
        // "new_price": "1200.00",
        // "old_price": "1355.00",
        // "image": "product-5.jpg"
        // },
        // {
        // "id": 9,
        // "desc": "Samsung gallaxy note 4",
        // "new_price": "400.00",
        // "old_price": "",
        // "image": "product-6.jpg"
        // }
    ];
  
    list_hien_thi:any[] = [];

    

}
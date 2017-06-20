import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from "../../services/product.service";
//import {ListSingleProductLeft} from '../../models/mock_single_product_left';
declare var $:any;
@Component({
    selector: 'single-product-left',
    templateUrl: './single-product-left.component.html'
})

export class SingleProductLeftComponent implements OnInit {
    //Sử dụng service
    constructor(private _productService:ProductService) { 
        this._productService.getListProductFromPublicAPI().subscribe(data => this.listSingleProductLeft = data.slice(0,8));
    }
    //Sử dụng mock
    // constructor(){
    //     this.listSingleProductLeft = ListSingleProductLeft;
    // }
    ngOnInit() { }
    //Khai báo listProduct trang SinglePage
      
    listSingleProductLeft:any[]=[];
  
    list_hien_thi:any[] = [];

    

}
import { Component, OnInit } from '@angular/core';
import { Product } from "../../models/product";
import {ProductService} from "../../services/product.service";
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'product-detail',
    templateUrl: './product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {
    product : Product;
    constructor(private _route: ActivatedRoute, private _productService: ProductService) { 
        this._route.params.switchMap((params: Params)=> {
            console.log(params['name']);
            return this._productService.get_product_by_desc(params['name']);
        })
        .subscribe(data => {
            console.log(data);
            return this.product = data[0];
        });
    }

    ngOnInit() { }
}
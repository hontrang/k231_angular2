import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Product} from "../../models/product";
import { ActivatedRoute, Params }   from '@angular/router';
import {ProductService} from '../../services/product.service';
import { CartService } from "../../services/cart.service";
import 'rxjs/add/operator/switchMap';

declare var jQuery: any;
@Component({
    selector: 'single-product-right',
    templateUrl: './single-product-right.component.html',
    styleUrls:['./check-review.css']   

})

export class SingleProductRightComponent implements OnInit {
      
      //Khai báo user review
        user_review: any = {
        ten:"",
        emailuser: "",
        danh_gia: ""
    }
    listSingleProductRight:any[]=[];    
       listGioHang:any[]=[];
    isReviewed:boolean=false;
    productDetail:any;
    
    mang_gio_hang: any[] = [];
    tong_so_luong: number = 0;
    tong_tien: number = 0;

   
    // constructor(private route:ActivatedRoute,private productservice:ProductService) {
       
    //  }
      constructor(private _cartService: CartService,private route:ActivatedRoute,private productservice:ProductService) {
        let chuoi_ds_gio_hang = localStorage.getItem("gio_hang");

        if (chuoi_ds_gio_hang != "" && chuoi_ds_gio_hang != null) {
            this.mang_gio_hang = JSON.parse(chuoi_ds_gio_hang);
        }
        this._cartService.$getEventSubject.subscribe($event => {
            setTimeout(() => {
                this.tong_so_luong = this._cartService.countCartList();
                let new_item_price = this._cartService.getNewItem();
                this.tong_tien += parseFloat(new_item_price.new_price);
            }, 100)
        });
        //console.log(chuoi_ds_gio_hang);    
    }
    ngOnInit() {

        this.route.params
        .switchMap((params: Params) => this.productservice.getListProductFromPublicAPIById(+params['id_san_pham']))
        .subscribe(product=>{
            this.productDetail=product[0];
        });


     }

    //Xử lý button review
    clickReviews(form:NgForm){
        alert('bạn đã đánh giá xong');
        this.isReviewed=true;
    }
    addToCart(item:Product){
        this._cartService.cartChange('add',item);
    }
    
}
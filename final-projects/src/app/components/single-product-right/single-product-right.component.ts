import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
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
    constructor() { }

    ngOnInit() { }

    //Xử lý button review
    clickReviews(form:NgForm){
        alert('bạn đã đánh giá xong');
        this.isReviewed=true;
    }
    // AddToCart(id_sp:any)
    // {
    //     this.listSingleProductRight.forEach((san_pham)=>{
    //         if(san_pham.id==id_sp){
                
    //                 if(this.listGioHang.length>0){
    //                     let check=0;
    //                     this.listGioHang.forEach(san_pham_gio_hang=>{
    //                         if(san_pham_gio_hang.id===id_sp){
    //                             san_pham_gio_hang.soluong+=1;
    //                             check=1;
    //                         }

    //                     });
    //                         if(check==0){
    //                             san_pham.soluong=1;
    //                             this.listGioHang.push(san_pham);
    //                         }
    //                 }
    //                 else{
    //                     san_pham.soluong=1;
    //                     this.listGioHang.push(san_pham);
    //                 }
                
    //         }
    //     });
    //     let soluongsp = 0;
    //     let tongtien = 0;
    //     this.listGioHang.forEach((sp_gio_hang) => {
    //         soluongsp += sp_gio_hang.soluong * 1;
    //         tongtien +=sp_gio_hang.soluong * sp_gio_hang.new_price;
    //     });
    //    //localStorage.setItem("gio_hang", JSON.stringify(this.listGioHang));
    //     $(".product-count").html(soluongsp);
    //     $(".cart-amunt").html('$'+tongtien);
    
}
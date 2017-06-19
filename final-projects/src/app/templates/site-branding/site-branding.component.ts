import { Component, OnInit } from '@angular/core';
import { CartService } from "../../services/cart.service";

@Component({
    selector: 'site-branding-template',
    templateUrl: './site-branding.component.html'
})

export class SiteBrandingComponent implements OnInit {

    mang_gio_hang: any[] = [];
    tong_so_luong: number = 0;
    tong_tien: number = 0;

    constructor(private _cartService: CartService) {
        let chuoi_ds_gio_hang = localStorage.getItem("gio_hang");

        if (chuoi_ds_gio_hang != "" && chuoi_ds_gio_hang != null) {
            this.mang_gio_hang = JSON.parse(chuoi_ds_gio_hang);
        }
        this._cartService.$getEventSubject.subscribe($event => {
            setTimeout(() => {
                this.tong_so_luong = this._cartService.countCartList();
                let new_item_price = this._cartService.getNewItem();
                console.log(this.tong_tien)
                console.log(new_item_price.don_gia);
                //used expression += or + got failed, unknown reason ????
                this.tong_tien = this.tong_tien  + Number(new_item_price.don_gia);
            }, 100)
        });
        //console.log(chuoi_ds_gio_hang);    
    }
    updateCart() {

    }
    ngOnInit() { }
}
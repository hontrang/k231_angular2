import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";

@Component({
    selector: 'site-branding-template',
    templateUrl: './site-branding.component.html'
})

export class SiteBrandingComponent implements OnInit {
    
     mang_gio_hang: any[] = [];
    tong_so_luong: number = 0;
    tong_tien: number = 0;

    constructor(private _cartService: CartService) {
        this._cartService.$getEventSubject.subscribe($event => {
            setTimeout(() => {
                this.tong_so_luong = this._cartService.countCartList();
                this.tong_tien = this._cartService.totalProductPrice();
            }, 100)
        });
    }
    ngOnInit() { }
}
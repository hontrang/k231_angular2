import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from "../../services/shoppingCart.service";

@Component({
    selector: 'site-branding-template',
    templateUrl: './site-branding.component.html'
})

export class SiteBrandingComponent implements OnInit {
    
     mang_gio_hang: any[] = [];
    tong_so_luong: number = 0;
    tong_tien: number = 0;

    constructor(private shoppingCartService:ShoppingCartService) {

    }
    
    ngOnInit() { }
}
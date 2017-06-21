import { Component, OnInit } from '@angular/core';
import { Product } from "../../models/product";
import { ProductService } from "../../services/product.service";
import { UserService } from "../../services/user.service";
import { CartService } from "../../services/cart.service";
declare var $: any;

@Component({
    selector: 'single-shop-product',
    templateUrl: './single-shop-product.component.html'
})

export class SingleShopProductComponent implements OnInit {
    listProducts: any[] = [];
    max_view = 8;
    increasement = 8;
    constructor(private _productService: ProductService, private _userService: UserService, private _cartService: CartService) {
        this._userService.$getEventSubject.subscribe(event => {
            this._productService.getListProductFromPublicAPI().subscribe(data => {
                this.listProducts = data.sort((a, b) => {
                    return a.so_lan_xem - b.so_lan_xem;
                }).reverse();
            });
        });

    }
    viewMore(){
        this.max_view+=this.increasement;
    }
    ngOnInit() { }
}
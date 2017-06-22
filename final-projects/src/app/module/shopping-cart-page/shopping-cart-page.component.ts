import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from "../../models/shoppingCart.component";
import { CartService } from "../../services/cart.service";

@Component({
    selector: 'shopping-cart-content',
    templateUrl: './shopping-cart-page.component.html'
})

export class ShoppingCartContentComponent implements OnInit {
    listCart: ShoppingCart;
    constructor(private _cartService: CartService) {
        this.listCart = this._cartService.getListCart();
        this._cartService.getListCart();
    }

    ngOnInit() { }

    onChangeQuatity(item: any, isAdd: boolean) {
        return (isAdd == true) ? this._cartService.cartChange('add', item.Pt) : this._cartService.cartChange('remove', item.Pt);
    }

    removeItemOnCart(item: any) {
        this._cartService.cartChange('removeAll', item.Pt);
    }
}
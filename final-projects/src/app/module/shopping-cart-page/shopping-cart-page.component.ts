import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from "../../services/shoppingCart.service";
import { ShoppingCart } from "../../models/shoppingCart.component";

@Component({
    selector: 'shopping-cart-content',
    templateUrl: './shopping-cart-page.component.html'
})

export class ShoppingCartContentComponent implements OnInit {
    constructor(private shoppingCartService: ShoppingCartService) {
        
    }

    ngOnInit() { }

    onChangeQuatity(index:number, isAdd:boolean){
        if(isAdd == true){
            this.shoppingCartService.listCart[index].Quantity += 1;
        }else{
            if(this.shoppingCartService.listCart[index].Quantity < 1){
                this.removeItemOnCart(index);
                return false;
            }
            this.shoppingCartService.listCart[index].Quantity -= 1;            
        }

        this.shoppingCartService.calculateTotal();
    }

    removeItemOnCart(index:number){
        let confirmBox = confirm("Do you want move this item out your Shopping Carts");
        if(confirmBox)            
            this.shoppingCartService.listCart.splice(index, 1);
        
        this.shoppingCartService.calculateTotal();
    }
}
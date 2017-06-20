import { Injectable } from '@angular/core';
import { ShoppingCart } from "../models/shoppingCart.component";

@Injectable()
export class ShoppingCartService {
    
    listCart:ShoppingCart[] = [];
    totalPrice:number = 0;
    totalQuantity:number = 0;
    constructor() { 

    }

    addToShoopingCart(shoppingCart:ShoppingCart){       
        
        if(this.listCart.length > 0){
            let isReady:boolean = false;
            
            this.listCart.forEach(item => {
                if(item.ProductID === shoppingCart.ProductID){
                    item.Quantity += 1;
                    isReady = true;
                }

            })

            if(!isReady) this.listCart.push(shoppingCart);

        }else{
            this.listCart.push(shoppingCart);
        }

        this.calculateTotal();

        return this.listCart.length;
    }

    calculateTotal(){
        this.totalQuantity = 0;
        this.totalPrice = 0;
        this.listCart.forEach((item) => {
            this.totalQuantity += item.Quantity * 1;
            this.totalPrice += item.ProductPrice * item.Quantity;
        });
    }

}
import { Injectable } from '@angular/core';
import { Observable, Subject, ReplaySubject } from 'rxjs';
import { Product } from "../models/product";

@Injectable()
export class CartService {
    private eventSubject: Subject<any> = new ReplaySubject(1);
    cartList: Product[] = [];
    newItem: Product;
    constructor() { }
    // set observable of this subject

    cartChange(type: string, product: Product) {
        this.sendCustomEvent();
        switch (type) {
            case 'add':
                this.addProduct(product);
                break;
            case 'remove':
                this.removeProduct(product);
                break;
            default:
                break;
        }
        this.setNewItem(product);
        console.log(this.cartList);
    }
    setNewItem(item: Product) {
        this.newItem = item;
    }
    getNewItem(){
        return this.newItem;
    }
    addProduct(product: Product) {
        this.cartList.push(product);
    }
    removeProduct(product: Product) {
        this.cartList.forEach((item, index) => {
            if (item.id == product.id) {
                this.cartList.splice(index, 1);
            }
        });
    }
    countCartList() {
        return this.cartList.length;
    }
    get $getEventSubject(): Observable<any> {
        return this.eventSubject.asObservable();
    }
    // remove from observer
    resetEventObserver(): void {
        this.eventSubject = new ReplaySubject(1);
    }
    // send event to observers
    sendCustomEvent(): void {
        this.eventSubject.next(true);
    }
}
import { Injectable } from '@angular/core';
import { Observable, Subject, ReplaySubject } from 'rxjs';
import { Product } from "../models/product";
import { ShoppingCart } from "../models/shoppingCart.component";
import { UserService } from "../services/user.service";

declare var $: any;
@Injectable()
export class CartService{
    private eventSubject: Subject<any> = new ReplaySubject(1);
    currentEmail: string = "";
    private listCart : ShoppingCart;
    constructor(private _userService: UserService) {
        // List card must be created before subcribsing credential service
        this.listCart = new ShoppingCart("SC" + Date.now(), this.currentEmail, []);
        //Subcribsing service to change user when credential occurs
        this._userService.$getEventSubject.subscribe(data => {
            let loggedUser = this._userService.getLoggedUser();
            this.listCart.UserID = (loggedUser != undefined) ? loggedUser.Email : "";
        })
        if (localStorage.getItem('gio_hang') != undefined) {
            this.listCart = JSON.parse(localStorage.getItem('gio_hang'));
            setTimeout(() => this.calculateTotal(), 50);
        }
    }
    // set observable of this subject

    cartChange(type: string, product: Product) {
        switch (type) {
            case 'add':
                this.addProduct(product);
                break;
            case 'remove':
                this.removeProduct(product);
                break;
            case 'removeAll':
                this.removeAll(product);
            default:
                break;
        }
        this.calculateTotal();
        localStorage.setItem('gio_hang', JSON.stringify(this.listCart));
    }
    calculateTotal() {
        this.sendCustomEvent();
        this.listCart.Quantity = 0;
        this.listCart.ProductPrice = 0;
        this.listCart.Items.forEach((item) => {
            this.listCart.Quantity += Number(item.Quantity);
            this.listCart.ProductPrice += Number(item.Pt.don_gia) * item.Quantity;
        });
    }
    addProduct(product: Product) {
        if (this.listCart.Items.length > 0) {
            let isReady: boolean = false;
            this.listCart.Items.forEach(item => {
                if (item.Pt.ma === product.ma) {
                    item.Quantity += 1;
                    isReady = true;
                }

            })
            if (!isReady) {
                this.listCart.Items.push({ Pt: product, Quantity: 1 });
            };

        } else {
            this.listCart.Items.push({ Pt: product, Quantity: 1 });
        }
    }
    removeProduct(product: Product) {
        this.listCart.Items.forEach((item, index) => {
            if (item.Pt.ma == product.ma) {
                if (item.Quantity > 1) {
                    return item.Quantity -= 1;
                }
                let confirmBox = confirm("Bạn muốn xóa hoàn toàn sản phẩm khỏi giỏ hàng?");
                if (confirmBox)
                    this.listCart.Items.splice(index, 1);
                return 0;
            }
        });
    }
    removeAll(product: Product) {
        let confirmBox = confirm("Bạn muốn xóa hoàn toàn sản phẩm khỏi giỏ hàng?");
        if (confirmBox) {
            this.listCart.Items.forEach((item, index) => {
                if (item.Pt.ma == product.ma) this.listCart.Items.splice(index, 1);
            })
        }
        return 0;
    }
    countCartList() {
        return this.listCart.Quantity;
    }
    totalProductPrice() {
        return this.listCart.ProductPrice;
    }
    getListCart() {
        return this.listCart;
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
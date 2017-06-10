import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'single-shop-product',
    templateUrl: './single-shop-product.component.html'
})

export class SingleShopProductComponent implements OnInit {
    constructor() { }
    listProduct: any = [
        {
            title:"Apple new mac book 2015 March :P",
            image:"img/product-1.jpg",
            alt:"",
            price:"899.00",
            originalPrice:"999.00"
        },
        {
            title:"",
            image:"",
            alt:"",
            price:"",
            originalPrice:""
        },
        {
            title:"",
            image:"",
            alt:"",
            price:"",
            originalPrice:""
        },
        {
            title:"",
            image:"",
            alt:"",
            price:"",
            originalPrice:""
        },
        {
            title:"",
            image:"",
            alt:"",
            price:"",
            originalPrice:""
        },
        {
            title:"",
            image:"",
            alt:"",
            price:"",
            originalPrice:""
        },
        {
            title:"",
            image:"",
            alt:"",
            price:"",
            originalPrice:""
        },
        {
            title:"",
            image:"",
            alt:"",
            price:"",
            originalPrice:""
        },
        {
            title:"",
            image:"",
            alt:"",
            price:"",
            originalPrice:""
        },
        {
            title:"",
            image:"",
            alt:"",
            price:"",
            originalPrice:""
        },
    ]
    ngOnInit() { }
}
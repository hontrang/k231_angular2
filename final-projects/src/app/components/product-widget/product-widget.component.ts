import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'product-widget',
    templateUrl: './product-widget.component.html'
})

export class ProductWidgetComponent implements OnInit {
    item_hien_thi: number = 4;
    constructor() { 

    }

    ngOnInit() { }

    listTopSellersProducts: any[] = [];
    listRecentlyViewedProducts: any[] = [];
    listTopNewProducts: any[] = [];

    ViewMore(event: any) {
        this.item_hien_thi += 3;
    }
}
import { Component, OnInit } from '@angular/core';
import { Product } from "../../models/product";
import { TopSellerProduct } from "../../models/mock_topseller";
import { RecentlyViewedProducts } from "../../models/mock_recentlyviewdproducts";
import { TopNewProduct } from "../../models/mock_topnewproducts";

@Component({
    selector: 'product-widget',
    templateUrl: './product-widget.component.html'
})

export class ProductWidgetComponent implements OnInit {
    item_hien_thi: number = 4;
    constructor() { 
        this.listTopSellersProducts = TopSellerProduct; 
        this.listRecentlyViewedProducts = RecentlyViewedProducts;
        this.listTopNewProducts = TopNewProduct;
    }

    ngOnInit() { }

    listTopSellersProducts: any[] = [];
    listRecentlyViewedProducts: any[] = [];
    listTopNewProducts: any[] = [];

    ViewMore(event: any) {
        this.item_hien_thi += 3;
    }
}
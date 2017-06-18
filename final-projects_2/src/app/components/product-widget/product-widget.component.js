"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ProductWidgetComponent = (function () {
    function ProductWidgetComponent() {
        this.item_hien_thi = 4;
        this.listTopSellersProducts = [
            {
                id: 1,
                name: 'Sony Smart TV - 2015',
                old_price: '425.00',
                new_price: '400.00',
                image: 'product-thumb-1.jpg'
            },
            {
                id: 2,
                name: 'Apple new mac book 2015',
                old_price: '405.00',
                new_price: '300.00',
                image: 'product-thumb-2.jpg'
            },
            {
                id: 3,
                name: 'Apple new i phone 6',
                old_price: '500.00',
                new_price: '400.00',
                image: 'product-thumb-3.jpg'
            },
            {
                id: 4,
                name: 'Laptop Toshiba Vaio',
                old_price: '925.00',
                new_price: '700.00',
                image: 'product-thumb-1.jpg'
            },
            {
                id: 5,
                name: 'Iphone 5S',
                old_price: '325.00',
                new_price: '300.00',
                image: 'product-thumb-2.jpg'
            },
            {
                id: 6,
                name: 'Iphone 4S',
                old_price: '300.00',
                new_price: '200.00',
                image: 'product-thumb-3.jpg'
            }
        ];
        this.listRecentlyViewedProducts = [
            {
                id: 7,
                name: 'Sony playstation microsoft',
                old_price: '325.00',
                new_price: '300.00',
                image: 'product-thumb-4.jpg'
            },
            {
                id: 8,
                name: 'Sony Smart Air Condtion',
                old_price: '415.00',
                new_price: '399.00',
                image: 'product-thumb-1.jpg'
            },
            {
                id: 9,
                name: 'Samsung gallaxy note 4',
                old_price: '570.00',
                new_price: '506.00',
                image: 'product-thumb-2.jpg'
            }
        ];
        this.listTopNewProducts = [
            {
                id: 10,
                name: 'Apple new i phone 6',
                old_price: '400.00',
                new_price: '500.00',
                image: 'product-thumb-3.jpg'
            },
            {
                id: 11,
                name: 'Samsung gallaxy note 3',
                old_price: '475.00',
                new_price: '359.00',
                image: 'product-thumb-2.jpg'
            },
            {
                id: 12,
                name: 'Ipad Air 5',
                old_price: '540.00',
                new_price: '456.00',
                image: 'product-thumb-1.jpg'
            }
        ];
    }
    ProductWidgetComponent.prototype.ngOnInit = function () { };
    ProductWidgetComponent.prototype.ViewMore = function (event) {
        this.item_hien_thi += 3;
    };
    return ProductWidgetComponent;
}());
ProductWidgetComponent = __decorate([
    core_1.Component({
        selector: 'product-widget',
        templateUrl: './product-widget.component.html'
    }),
    __metadata("design:paramtypes", [])
], ProductWidgetComponent);
exports.ProductWidgetComponent = ProductWidgetComponent;
//# sourceMappingURL=product-widget.component.js.map
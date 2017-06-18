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
var single_product_left_service_1 = require("../../services/single-product-left.service");
var SingleProductLeftComponent = (function () {
    //Sử dụng service
    function SingleProductLeftComponent(list_Single_Product_Left) {
        this.list_Single_Product_Left = list_Single_Product_Left;
        //Khai báo listProduct trang SinglePage
        this.listSingleProductLeft = [];
        this.list_hien_thi = [];
        this.listSingleProductLeft = list_Single_Product_Left.get_list_single_product_left();
    }
    //Sử dụng mock
    // constructor(){
    //     this.listSingleProductLeft = ListSingleProductLeft;
    // }
    SingleProductLeftComponent.prototype.ngOnInit = function () { };
    return SingleProductLeftComponent;
}());
SingleProductLeftComponent = __decorate([
    core_1.Component({
        selector: 'single-product-left',
        templateUrl: './single-product-left.component.html'
    }),
    __metadata("design:paramtypes", [single_product_left_service_1.SingleProductLeftService])
], SingleProductLeftComponent);
exports.SingleProductLeftComponent = SingleProductLeftComponent;
//# sourceMappingURL=single-product-left.component.js.map
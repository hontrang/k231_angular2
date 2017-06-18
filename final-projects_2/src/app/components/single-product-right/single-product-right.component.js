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
var router_1 = require("@angular/router");
var product_service_1 = require("../../services/product.service");
require("rxjs/add/operator/switchMap");
var SingleProductRightComponent = (function () {
    function SingleProductRightComponent(route, productservice) {
        this.route = route;
        this.productservice = productservice;
        //Khai báo user review
        this.user_review = {
            ten: "",
            emailuser: "",
            danh_gia: ""
        };
        this.listSingleProductRight = [];
        this.listGioHang = [];
        this.isReviewed = false;
    }
    SingleProductRightComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.productservice.get_list_productById(+params['id_san_pham']); })
            .subscribe(function (product) {
            _this.productDetail = product[0];
            console.log(_this.productDetail);
        });
        console.log(this.route.params);
    };
    //Xử lý button review
    SingleProductRightComponent.prototype.clickReviews = function (form) {
        alert('bạn đã đánh giá xong');
        this.isReviewed = true;
    };
    return SingleProductRightComponent;
}());
SingleProductRightComponent = __decorate([
    core_1.Component({
        selector: 'single-product-right',
        templateUrl: './single-product-right.component.html',
        styleUrls: ['./check-review.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, product_service_1.ProductService])
], SingleProductRightComponent);
exports.SingleProductRightComponent = SingleProductRightComponent;
//# sourceMappingURL=single-product-right.component.js.map
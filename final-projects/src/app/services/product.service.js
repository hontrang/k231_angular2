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
var mock_product_1 = require("../models/mock_product");
var user_service_1 = require("../services/user.service");
var ProductService = (function () {
    function ProductService(_userService) {
        this._userService = _userService;
    }
    ProductService.prototype.get_list_product = function () {
        return mock_product_1.ListProduct;
    };
    ProductService.prototype.get_list_product_with_price = function (name) {
        console.log(this._userService.checkUserLogged());
        if (this._userService.checkUserLogged()) {
            return Promise.resolve(mock_product_1.ListProduct);
        }
        else {
            return Promise.resolve(mock_product_1.ListProduct).then(function (data) {
                return data.filter(function (item) { return item.desc.indexOf(name) > -1; });
            });
        }
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map
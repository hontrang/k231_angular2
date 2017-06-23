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
var product_service_1 = require("../../services/product.service");
var user_service_1 = require("../../services/user.service");
var cart_service_1 = require("../../services/cart.service");
var ShopPageComponent = (function () {
    function ShopPageComponent(_productService, _userService, _cartService) {
        var _this = this;
        this._productService = _productService;
        this._userService = _userService;
        this._cartService = _cartService;
        this.listGioHang = [];
        this.listProducts = [];
        this.listFromAPI = [];
        this.isShowAlert = false;
        this._userService.$getEventSubject.subscribe(function (event) {
            _this._productService.getListProductFromPublicAPI().subscribe(function (data) {
                _this.listProducts = data.sort(function (a, b) {
                    return Date.parse(a.ngay_tao) - Date.parse(b.ngay_tao);
                }).slice(data.length - 8, data.length).reverse();
            });
        });
    }
    ShopPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.loadJQuery();
        });
        var chuoi_ds_gio_hang = localStorage.getItem("gio_hang");
        if (chuoi_ds_gio_hang != "" && chuoi_ds_gio_hang != null) {
            this.listGioHang = JSON.parse(chuoi_ds_gio_hang);
        }
    };
    ShopPageComponent.prototype.AddToCart = function (item) {
        var _this = this;
        this._cartService.cartChange('add', item);
        this.isShowAlert = true;
        setTimeout(function () {
            _this.isShowAlert = false;
        }, 3000);
    };
    ShopPageComponent.prototype.loadJQuery = function () {
        // jQuery sticky Menu
        $(".mainmenu-area").sticky({ topSpacing: 0 });
        $('.product-carousel').owlCarousel({
            loop: true,
            nav: true,
            margin: 20,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 3,
                },
                1000: {
                    items: 5,
                }
            }
        });
        $('.related-products-carousel').owlCarousel({
            loop: true,
            nav: true,
            margin: 20,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 2,
                },
                1200: {
                    items: 3,
                }
            }
        });
        $('.brand-list').owlCarousel({
            loop: true,
            nav: true,
            margin: 20,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 3,
                },
                1000: {
                    items: 4,
                }
            }
        });
        // Bootstrap Mobile Menu fix
        $(".navbar-nav li a").click(function () {
            $(".navbar-collapse").removeClass('in');
        });
        // jQuery Scroll effect
        $('.navbar-nav li a, .scroll-to-up').bind('click', function (event) {
            var $anchor = $(this);
            var headerH = $('.header-area').outerHeight();
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1200, 'easeInOutExpo');
            event.preventDefault();
        });
        // Bootstrap ScrollPSY
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 95
        });
    };
    return ShopPageComponent;
}());
ShopPageComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'shop-page',
        templateUrl: './shop-page.component.html'
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService, user_service_1.UserService, cart_service_1.CartService])
], ShopPageComponent);
exports.ShopPageComponent = ShopPageComponent;
//# sourceMappingURL=shop-page.component.js.map
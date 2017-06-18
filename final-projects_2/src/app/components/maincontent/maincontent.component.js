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
var MaincontentComponent = (function () {
    function MaincontentComponent() {
        this.listGioHang = [];
        this.listProducts = [
            {
                "id": 1,
                "desc": "Samsung Galaxy s5- 2015",
                "new_price": "700.00",
                "old_price": "100.00",
                "image": "product-1.jpg"
            },
            {
                "id": 2,
                "desc": "Nokia Lumia 1320",
                "new_price": "899.00",
                "old_price": "999.00",
                "image": "product-2.jpg"
            },
            {
                "id": 3,
                "desc": "LG Leon 2015",
                "new_price": "400.00",
                "old_price": "425.00",
                "image": "product-3.jpg"
            },
            {
                "id": 4,
                "desc": "Sony microsoft",
                "new_price": "200.00",
                "old_price": "",
                "image": "product-4.jpg"
            },
            {
                "id": 5,
                "desc": "iPhone 6",
                "new_price": "1200.00",
                "old_price": "1355.00",
                "image": "product-5.jpg"
            },
            {
                "id": 9,
                "desc": "Samsung gallaxy note 4",
                "new_price": "400.00",
                "old_price": "",
                "image": "product-6.jpg"
            }
        ];
    }
    MaincontentComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.loadJQuery();
        });
        var chuoi_ds_gio_hang = localStorage.getItem("gio_hang");
        if (chuoi_ds_gio_hang != "" && chuoi_ds_gio_hang != null) {
            this.listGioHang = JSON.parse(chuoi_ds_gio_hang);
        }
    };
    MaincontentComponent.prototype.loadJQuery = function () {
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
    MaincontentComponent.prototype.AddToCart = function (id_sp) {
        var _this = this;
        this.listProducts.forEach(function (san_pham) {
            if (san_pham.id == id_sp) {
                if (_this.listGioHang.length > 0) {
                    var check_1 = 0;
                    _this.listGioHang.forEach(function (san_pham_gio_hang) {
                        if (san_pham_gio_hang.id === id_sp) {
                            san_pham_gio_hang.soluong += 1;
                            check_1 = 1;
                        }
                    });
                    if (check_1 == 0) {
                        san_pham.soluong = 1;
                        _this.listGioHang.push(san_pham);
                    }
                }
                else {
                    san_pham.soluong = 1;
                    _this.listGioHang.push(san_pham);
                }
            }
        });
        var soluongsp = 0;
        var tongtien = 0;
        this.listGioHang.forEach(function (sp_gio_hang) {
            soluongsp += sp_gio_hang.soluong * 1;
            tongtien += sp_gio_hang.soluong * sp_gio_hang.new_price;
        });
        localStorage.setItem("gio_hang", JSON.stringify(this.listGioHang));
        $(".product-count").html(soluongsp);
        $(".cart-amunt").html('$' + tongtien);
        //    AddToCart(sp:any){
        //     if(this.listProducts.length>0)
        //     {
        //         let kiemtra:boolean = true;
        //          this.listProducts.forEach((item)=>{
        //              if(item.id == sp.id)
        //              {
        //                    item.so_luong += 1; 
        //                    kiemtra = false;              
        //              }
        //          });
        //          if(kiemtra){
        //                   sp.so_luong = 1;
        //                     this.listProducts.push(sp);
        //              }
        //     }
        //     else {
        //         sp.so_luong = 1;                            
        //         this.listProducts.push(sp);
        //         //console.log(this.list_product) ;   
        //     }
        //     let soLuongTong=0;
        //     let thanhTien=0;
        //     this.listProducts.forEach((item)=>{
        //     soLuongTong += item.so_luong*1;
        //     thanhTien += item.don_gia * item.so_luong;
        //     });
        //     $(".product-count").html(soLuongTong);
        //     $(".cart-amunt").html(thanhTien);
        //  console.log( this.list_product);
    };
    return MaincontentComponent;
}());
MaincontentComponent = __decorate([
    core_1.Component({
        selector: 'maincontent',
        templateUrl: './maincontent.component.html'
    }),
    __metadata("design:paramtypes", [])
], MaincontentComponent);
exports.MaincontentComponent = MaincontentComponent;
//# sourceMappingURL=maincontent.component.js.map
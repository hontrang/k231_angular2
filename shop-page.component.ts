import { Component, OnInit } from '@angular/core';
import { Product } from "../../models/product";
import { ProductService } from "../../services/product.service";
import { UserService } from "../../services/user.service";
import { CartService } from "../../services/cart.service";
import { ShoppingCart } from "../../models/shoppingCart.component";
declare var $: any;


@Component({
    moduleId: module.id,
    selector: 'shop-page',
    templateUrl: './shop-page.component.html'
})

export class ShopPageComponent implements OnInit {
    listGioHang: any[] = [];
    listProducts: any[] = [];
    listFromAPI: Product[] = [];
    isShowAlert: boolean = false;
    constructor(private _productService: ProductService, private _userService: UserService, private _cartService: CartService) {
        this._userService.$getEventSubject.subscribe(event => {
            this._productService.getListProductFromPublicAPI().subscribe(data => {
                this.listProducts = data.sort((a, b) => {
                    return Date.parse(a.ngay_tao) - Date.parse(b.ngay_tao);
                }).slice(data.length - 8, data.length).reverse();
            });
        });
    }

    ngOnInit() {
        setTimeout(() => {
            this.loadJQuery();
        });
        let chuoi_ds_gio_hang = localStorage.getItem("gio_hang");

        if (chuoi_ds_gio_hang != "" && chuoi_ds_gio_hang != null) {
            this.listGioHang = JSON.parse(chuoi_ds_gio_hang);
        }
    }
    AddToCart(item: Product) {
        this._cartService.cartChange('add', item);
        this.isShowAlert = true;
        setTimeout(() => {
            this.isShowAlert = false;
        }, 3000)
    }
    loadJQuery() {
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
        $('.navbar-nav li a, .scroll-to-up').bind('click', function (event: any) {
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
        })
    }
}
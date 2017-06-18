import { Component, OnInit } from '@angular/core';
import { Product } from "../../models/product";

import { ProductService } from "../../services/product.service";
import { UserService } from "../../services/user.service";
import { CartService } from "../../services/cart.service";
declare var $: any;

@Component({
    selector: 'maincontent',
    templateUrl: './maincontent.component.html'
})

export class MaincontentComponent implements OnInit {
    listGioHang: any[] = [];
    listProducts: any[] = [];
    listFromAPI: Product[] =[];
    constructor(private _productService: ProductService, private _userService: UserService, private _cartService: CartService) {
        this._userService.$getEventSubject.subscribe(event => {
            //wait for user log changed
            setTimeout(() => {
                this._productService.get_list_product_with_price("LG").then(data => {
                    this.listProducts = data.slice(0,8);
                    setTimeout(()=>{
                        this.loadJQuery();
                    },50);
                });
            }, 50)
        });
        this._productService.getListProductFromPublicAPI().subscribe(data => {
            this.listFromAPI = data;
            console.log(this.listFromAPI)
        });
        // productService.get_list_product_with_price("LG").then(data => {
        //     this.listProducts = data;
        // });

    }
    ngOnInit() {
        this._userService.$getEventSubject.subscribe(event => {
            
        });

        let chuoi_ds_gio_hang = localStorage.getItem("gio_hang");

        if (chuoi_ds_gio_hang != "" && chuoi_ds_gio_hang != null) {
            this.listGioHang = JSON.parse(chuoi_ds_gio_hang);
        }
    }

    showDetail(){
    
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

    AddToCart(item: Product) {
        this._cartService.cartChange('add',item);
        
        // this.listProducts.forEach((san_pham) => {
        //     if (san_pham.id == id_sp) {

        //         if (this.listGioHang.length > 0) {
        //             let check = 0;
        //             this.listGioHang.forEach(san_pham_gio_hang => {
        //                 if (san_pham_gio_hang.id === id_sp) {
        //                     san_pham_gio_hang.soluong += 1;
        //                     check = 1;
        //                 }

        //             });
        //             if (check == 0) {
        //                 san_pham.soluong = 1;
        //                 this.listGioHang.push(san_pham);
        //             }
        //         }
        //         else {
        //             san_pham.soluong = 1;
        //             this.listGioHang.push(san_pham);
        //         }

        //     }
        // });
        // let soluongsp = 0;
        // let tongtien = 0;
        // this.listGioHang.forEach((sp_gio_hang) => {
        //     soluongsp += sp_gio_hang.soluong * 1;
        //     tongtien += sp_gio_hang.soluong * sp_gio_hang.new_price;
        // });
        // localStorage.setItem("gio_hang", JSON.stringify(this.listGioHang));
        // $(".product-count").html(soluongsp);
        // $(".cart-amunt").html('$' + tongtien);
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

    }

}
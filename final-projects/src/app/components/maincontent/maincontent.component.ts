import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from "../../services/shoppingCart.service";
import { ShoppingCart } from "../../models/shoppingCart.component";
declare var jQuery: any;
declare var $: any;


@Component({
    selector: 'maincontent',
    templateUrl: './maincontent.component.html'
})

export class MaincontentComponent implements OnInit {
    listGioHang:any[]=[];
    isShowAlert:boolean = false;
    constructor(private shoppingCartService:ShoppingCartService) { 
        
    }

    ngOnInit() {
         setTimeout(() => {
            this.loadJQuery();
        });
        let chuoi_ds_gio_hang = localStorage.getItem("gio_hang");

        if(chuoi_ds_gio_hang != "" && chuoi_ds_gio_hang != null)
        {
            this.listGioHang = JSON.parse(chuoi_ds_gio_hang);
        }
     }
    
     listProducts:any[] =[
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

    AddToCart(item:any){
        let result:number =  this.shoppingCartService.addToShoopingCart(new ShoppingCart("SC" + Math.round(Math.random()*100000), "guest123", item.id, item.desc, item.image, item.new_price*1, 1));
        this.isShowAlert = true;
        setTimeout(()=>{
            this.isShowAlert = false;
        },2000)
    }
    
}
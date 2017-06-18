import { Component, OnInit ,AfterViewInit ,ViewChild,ElementRef} from '@angular/core';
declare var $:any;
@Component({
    selector: 'brands',
    templateUrl: './brands.component.html'
})

export class BrandsComponent implements OnInit, AfterViewInit {
    @ViewChild('selectElem') el: ElementRef;
    constructor() { }
    brandList: string[] = [
        "brand1.png",
        "brand2.png",
        "brand3.png",
        "brand4.png",
        "brand5.png",
        "brand6.png",
        "brand1.png",
        "brand3.png",
        "brand4.png",
        "brand5.png",
        "brand6.png",
        "brand1.png",
        "brand3.png",
        "brand4.png",
        "brand5.png",
        "brand6.png",
        "brand1.png",
        "brand3.png",
        "brand4.png",
        "brand5.png",
        "brand6.png",
        "brand1.png",
        "brand3.png",
        "brand4.png",
        "brand5.png",
        "brand6.png",
        "brand1.png",
        "brand3.png",
        "brand4.png",
        "brand5.png",
        "brand6.png",
        "brand1.png",
        "brand2.png",
    ];
    ngOnInit() {
     }
    ngAfterViewInit(){
            this.loadjQuery();
     }
    loadjQuery() {
        if ($('.bxslider').length > 0) {
            var slider = $('.bxslider').bxSlider({
                nextText: '<i class="fa fa-angle-right"></i>',
                prevText: '<i class="fa fa-angle-left"></i>',
                auto: true,
                captions: false,
                minSlides: 1,
                maxSlides: 4,
                slideWidth: 250,
                slideMargin: 20,
                speed: 1000,
                onSliderLoad: function (currentIndex: any) {
                    $('.bxslider li').find('.caption').each(function (i: any, index: any) {
                        $(this).show().addClass('animated fadeInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                            $(this).removeClass('fadeInRight animated');
                        });
                    })
                },
                onSlideBefore: function (slideElement: any, oldIndex: any, newIndex: any) {
                    //slideElement.find('.sl-description').hide();
                    slideElement.find('.caption').each(function () {
                        $(this).hide().removeClass('animated fadeInRight');
                    });
                },
                onSlideAfter: function (slideElement: any, oldIndex: any, newIndex: any) {
                    //slideElement.find('.sl-description').show();
                    setTimeout(function () {
                        slideElement.find('.caption').each(function () {
                            $(this).show().addClass('animated fadeInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                                $(this).removeClass('fadeInRight animated');
                            });
                        });
                    }, 500);
                }
            });
        }
    }
}